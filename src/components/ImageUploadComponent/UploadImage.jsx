import { Box, Card, CardMedia, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useUploadNewFileMutation } from '../../features/files/filesApiSlice';
import { colors, transition } from '../../muiTheme/theme';
import LoadingIconButton from '../LoadingIconButton/LoadingIconButton';
import WithToolTip from '../TooltipComponent/WithTooltip';

const applicationFileTypes = {
    IMAGE: 'image'
};

const MAX_FILE_SIZE = 10485760 /* 10MB in bytes */

const UploadImage = ({
    elementClassName,
    ariaLabel,
    color,
    message,
    children,
    border,
    opacity,
    meta,
    onChange,
    previousImage
}) => {

    const [error, setError] = useState('');

    const nullifyFileWithError = (errorMessage) => {
        setError(errorMessage);
    };

    const [uploadNewFile, { isLoading }] = useUploadNewFileMutation();

    const chooseFileFromFS = async (event) => {
        let fileData = event.target.files[0];
        if (!fileData) return nullifyFileWithError('');
        if (!fileData.type.includes(applicationFileTypes.IMAGE)) return nullifyFileWithError("Unsupported File Type!");
        if (!fileData.size > MAX_FILE_SIZE) return nullifyFileWithError("Too big! Max 10MB.")

        const formData = new FormData();
        formData.append("meta", meta);
        formData.append(meta, fileData);

        try {
            const { fileAddress, message } = await uploadNewFile(formData).unwrap();
            return onChange(fileAddress);

        } catch (error) {

        }
        /* return onChange(fileData) */
    };

    return (
        <>
            {
                !previousImage ?
                    <Box
                        className={elementClassName}
                        sx={{
                            width: "100%",
                            height: "100%",
                            borderRadius: '0.5em',
                            border: border ? `1px solid ${color}` : 0,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            opacity: opacity ? opacity : 1,

                            '&:hover': {
                                border: border ? `1.5px solid ${colors.white}` : 0,
                            }
                        }}
                    >

                        <WithToolTip
                            message={message}
                            color={colors.success}
                        >
                            <LoadingIconButton
                                aria-label={ariaLabel ? ariaLabel : 'upload-file'}
                                color={color}
                                isLoading={isLoading}
                                component="label"
                            >
                                <input hidden accept="image/*" type="file" onChange={chooseFileFromFS} />
                                {children}
                            </LoadingIconButton>
                        </WithToolTip>

                        {
                            error &&
                            <Typography
                                noWrap
                                textAlign={'center'}
                                className='noselect'
                                color='error'
                            >
                                {error}
                            </Typography>
                        }
                    </Box>
                    :
                    <Card
                        elevation={3}
                        className={elementClassName}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',

                            "& img, & .upload_image": {
                                transition: transition(),
                            },

                            "&:hover": {
                                "& img": {
                                    filter: 'brightness(30%)',
                                },

                                "& .upload_image": {
                                    opacity: 1,
                                }
                            }
                        }}
                    >
                        <CardMedia
                            component="img"
                            loading='lazy'
                            image={previousImage}
                            alt={`profile picture`}
                            sx={{
                                objectFit: 'cover'
                            }}
                        />

                        <div style={{ position: 'absolute' }}>
                            <UploadImage
                                elementClassName={'upload_image'}
                                ariaLabel={'upload_user_photo'}
                                color={colors.muted}
                                border={false}
                                opacity={0.3}
                                message={"Upload Image"}
                                meta={meta}
                                onChange={onChange}
                            >
                                {children}
                            </UploadImage>
                        </div>
                    </Card>
            }

        </>
    )
}

export default UploadImage
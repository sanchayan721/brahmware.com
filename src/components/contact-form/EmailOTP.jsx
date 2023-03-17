import React, { useState } from 'react';
import {
    EmailVerifiedIcon,
    LeadsIcon as RecieveOTPIcon,
    VerifyEmailIcon
} from '../../assets/icons';
import { Box, IconButton, InputAdornment, Typography, Zoom } from '@mui/material';
import { Controller } from 'react-hook-form';
import ThemedField from '../TextFilelds/ThemedField';
import CollapsableError from '../TextFilelds/CollapsableError';
import { LoadingButtonBig, LoadingButtonSmall } from '../LoadingButtonWithIcon';
import { OTP } from '../../utils/patterns';
import { colors } from '../../muiTheme/theme';
import {
    RotateLeftOutlined as ResendOtpIcon
} from '@mui/icons-material';
import LoadingIconButton from '../LoadingIconButton/LoadingIconButton';
import WithToolTip from '../TooltipComponent/WithTooltip';

const helperTextObject = {
    email_otp: {
        required: "Email OTP is Required.",
        pattern: "Wrong OTP"
    },
};

const EmailOTP = ({
    isOtpCorrect,
    setIsOtpCorrect,
    formControl
}) => {

    const [otpRecieved, setOtpRecieved] = useState(false);

    if (isOtpCorrect) {
        return (
            <Box
                className="contact__us-form_receive_email_verified noselect"
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                gap={'1em'}
            >
                <EmailVerifiedIcon
                    height={'5em'}
                    width={'5em'}
                />
                <Typography
                    fontSize={'1.25em'}
                    fontWeight={'medium'}
                    color={'primary'}
                >
                    This email is verified
                </Typography>
            </Box>
        )
    }

    if (!otpRecieved) {
        return (
            <LoadingButtonBig
                className='contact__us-form_receive_email_otp noselect'
                variant='contained'
                color='primary'
                loading={false}
                loadingPosition='start'
                type='submit'
                onClick={() => setOtpRecieved(true)}
                /* disabled={true} */
                startIcon={
                    <RecieveOTPIcon style={{ transform: 'translateY(-0.125em)' }} />
                }
                fullWidth
                size='large'
            >
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'start'}
                    gap={'0.25em'}
                >
                    <Typography
                        fontSize={'0.8em'}
                        fontWeight={'medium'}
                        color={colors.darker__card}
                        pl={'0.1em'}
                        lineHeight={'1em'}
                    >
                        Get OTP to
                    </Typography>
                    <Typography
                        fontSize={'1.25em'}
                        fontWeight={'bold'}
                        color={colors.darker__card}
                        lineHeight={'1em'}
                    >
                        Continue
                    </Typography>
                </Box>
            </LoadingButtonBig>
        )
    }

    else {

        return (
            <React.Fragment>
                <Controller
                    control={formControl}
                    name={'email_otp'}
                    rules={{
                        required: true,
                        pattern: OTP
                    }}
                    render={({ field, fieldState: { error } }) => {
                        return (
                            <Box
                                width={'100%'}
                                className='contact__us-form_email_otp'
                            >
                                <ThemedField
                                    {...field}
                                    variant={'filled'}
                                    ref={null}
                                    name={'email_otp'}
                                    id='email_otp'
                                    label="Enter OTP*"
                                    size='small'
                                    fullWidth
                                    error={error !== undefined}
                                    InputProps={{
                                        endAdornment:
                                            <InputAdornment
                                                position="end"
                                            >
                                                <WithToolTip
                                                    color={colors.primary}
                                                    textColor={colors.darker__card}
                                                    message={"Resend OTP"}
                                                >
                                                    <LoadingIconButton
                                                        aria-label='edit user'
                                                        onClick={() => console.log("hi")}
                                                        color='inherit'
                                                        loadingColor={'inherit'}
                                                        isLoading={false}
                                                    >
                                                        <ResendOtpIcon />
                                                    </LoadingIconButton>
                                                </WithToolTip>
                                            </InputAdornment>,
                                    }}
                                />

                                <CollapsableError
                                    growCondition={error !== undefined}
                                    padding={'0.5em 0.05em'}
                                >
                                    {
                                        error
                                            ? error?.type === 'userError'
                                                ? error?.errorMessage
                                                : helperTextObject.email_otp[error?.type]
                                            : ''
                                    }
                                </CollapsableError>
                            </Box>
                        )
                    }}
                />
                <LoadingButtonSmall
                    className="contact__us-form_email_otp_submit-button"
                    variant='contained'
                    color='primary'
                    loading={false}
                    loadingPosition='start'
                    /* type='submit' */
                    onClick={() => setIsOtpCorrect(true)}
                    startIcon={<VerifyEmailIcon />}
                    fullWidth
                    size='large'
                >
                    <Typography
                        fontSize={'1em'}
                        fontWeight={'bold'}
                        color={colors.darker__card}
                        lineHeight={'1em'}
                    >
                        Verify Email
                    </Typography>
                </LoadingButtonSmall>
            </React.Fragment>
        )
    };
}

export default EmailOTP
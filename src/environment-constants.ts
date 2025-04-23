const environmentData = {
    url: import.meta.env.VITE_APP_BACKEND_URL,
    resendOtpTimeInterval: parseInt(
        import.meta.env.VITE_APP_RESEND_OTP_TIME_INTERVAL_IN_SECONDS || '100',
        10
      ),
    isProduction: Boolean(import.meta.env.VITE_APP_IS_PRODUCTION === 'true') || false
};

export default environmentData;

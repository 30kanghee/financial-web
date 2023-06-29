import React from 'react';


const ErrorFallback: React.FC<{error: Error, resetErrorBoundary: (...args: Array<unknown>) => void}> = ({error}) => {
    // const location = useLocation();

    // const axiosError = useMemo(() => {
    //     if ('isAxiosError' in error) {
    //         const axiosError = error as AxiosError
    //         if (axiosError.isAxiosError) {
    //             return axiosError;
    //         }
    //     }
    //
    //     return null;
    // }, [error]);
    //
    // const siteBunnyAdminError = useMemo(() => {
    //     if ('isSiteBunnyAdminError' in error) {
    //         const _swingChatError = error as SiteBunnyAdminError
    //         if (_swingChatError.isSiteBunnyAdminError) {
    //             return _swingChatError;
    //         }
    //     }
    //
    //     return null;
    // }, [error]);
    // const code = useMemo(() => {
    //     if (axiosError) {
    //         return axiosError.response?.statusText;
    //     }
    //     else if (siteBunnyAdminError) {
    //         return siteBunnyAdminError.code;
    //     }
    //
    //     return null;
    // }, [axiosError, siteBunnyAdminError]);
    // const onClickReset = (e: React.MouseEvent) => {
    //     e.preventDefault();
    //
    //     resetErrorBoundary();
    // }
    // if (code === '403') {
    //     return (
    //         <View40X code={code} title={intl.formatMessage({id: 'i00560'})} description={intl.formatMessage({id: 'i00002'})}/>
    //     );
    // }
    // else if (code === '404') {
    //     return (
    //         <View40X code={code} title={intl.formatMessage({id: 'i00559'})} description={intl.formatMessage({id: 'i00003'})}/>
    //     );
    // }
    // else {
    //     return (
    //         <View500 />
    //     );
    // }
    return (
        <div className='h-full w-full flex items-center justify-center'>
            <span>AppFallback</span>
        </div>
    )
}

export default ErrorFallback
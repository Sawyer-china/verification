import request from '@/plugins/request';

export function AccountLogin (data) {
    return request({
        url: '/v1/security/login',
        method: 'post',
        data
    });
}

export function AccountRegister (data) {
    return request({
        url: '/api/register',
        method: 'post',
        data
    });
}

import request from '@/plugins/request';

export function GetUserList (data) {
    return request({
        url: '/api/system/user/list',
        method: 'post',
        data
    });
}

export function DeleteUser (data) {
    return request({
        url: '/api/system/user/delete',
        method: 'post',
        data
    });
}

export function DeleteUserMultiple (data) {
    return request({
        url: '/api/system/user/delete/multiple',
        method: 'post',
        data
    });
}

export function UpdateUser (data) {
    return request({
        url: '/api/system/user/update',
        method: 'post',
        data
    });
}

export function CreateUser (data) {
    return request({
        url: '/api/system/user/create',
        method: 'post',
        data
    });
}

export function GetRoleList (data) {
    return request({
        url: '/api/system/role/list',
        method: 'post',
        data
    });
}

export function DeleteRole (data) {
    return request({
        url: '/api/system/role/delete',
        method: 'post',
        data
    });
}

export function DeleteRoleMultiple (data) {
    return request({
        url: '/api/system/role/delete/multiple',
        method: 'post',
        data
    });
}

export function UpdateRole (data) {
    return request({
        url: '/api/system/role/update',
        method: 'post',
        data
    });
}

export function CreateRole (data) {
    return request({
        url: '/api/system/role/create',
        method: 'post',
        data
    });
}

export function GetMenuList (data) {
    return request({
        url: '/api/system/menu/list',
        method: 'post',
        data
    });
}

export function UpdateRoleMenu (data) {
    return request({
        url: '/api/system/role/menu/update',
        method: 'post',
        data
    });
}

export function CreateHeaderMenu (data) {
    return request({
        url: '/api/system/menu/header/create',
        method: 'post',
        data
    });
}

export function CreateSiderMenu (data) {
    return request({
        url: '/api/system/menu/sider/create',
        method: 'post',
        data
    });
}

export function DeleteMenu (data) {
    return request({
        url: '/api/system/menu/delete',
        method: 'post',
        data
    });
}

export function DeleteMenuMultiple (data) {
    return request({
        url: '/api/system/menu/delete/multiple',
        method: 'post',
        data
    });
}

export function UpdateMenu (data) {
    return request({
        url: '/api/system/menu/update',
        method: 'post',
        data
    });
}

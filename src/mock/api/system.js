const userData = [
    {
        id: '100000001',
        name: '夏洛特',
        avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/536/536.jpg',
        account: 'xialuote',
        phone: '18800008888',
        mail: 'xialuote@mail.com',
        gender: 1,
        status: 1,
        date: '2020-01-02 12:01:20',
        birthday: '2020-01-02',
        region: ['北京市', '市辖区', '东城区'],
        role: ['ROLE_USER'],
        desc: '夏洛特是日落海久负盛名的贵族家族中，最为优秀的继承者。她以精湛无匹的剑术，在过往所有贵族间的战斗中，毫无悬念地赢取胜利，并将火焰样的红玫瑰留给败者，作为优雅的结束礼。'
    },
    {
        id: '100000002',
        name: '阿古朵',
        avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/533/533.jpg',
        account: 'aguduo',
        phone: '18800008888',
        mail: 'aguduo@mail.com',
        gender: 2,
        status: 1,
        date: '2020-01-03 11:23:32',
        birthday: '2020-01-03',
        region: ['北京市', '市辖区', '朝阳区'],
        role: ['ROLE_USER'],
        desc: '野性率真的山孩阿古朵，和她最好的朋友巨兽球球，是三分之地战场上破坏力惊人的生力军。从幼年开始的密林生活让她善用植物的特性，并通晓与野兽的相处之道。她总是出其不意的在战场各处弹射出令人惊奇的种子弹药，同时，只要她一声令下，那些被她帮助过的动物们就会一拥而上，让他们见识见识大山的力量。'
    },
    {
        id: '100000003',
        name: '蒙恬',
        avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/527/527.jpg',
        account: 'mengtian',
        phone: '18800008888',
        mail: 'mengtian@mail.com',
        gender: 1,
        status: 1,
        date: '2020-01-04 06:12:32',
        birthday: '2020-01-04',
        region: ['北京市', '市辖区', '海淀区'],
        role: ['ROLE_USER'],
        desc: '旧玄雍物产匮乏，纷争不断，百姓生活十分艰苦，出生于名将世家的蒙恬因对民众苦难的同情，梦想有朝一日能重振国家，使百姓免于苦难。他自幼勤修武道，苦读兵法，希望能尽早实现自己的人生追求。'
    },
    {
        id: '100000004',
        name: '镜',
        avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/531/531.jpg',
        account: 'jing',
        phone: '18800008888',
        mail: 'jing@mail.com',
        gender: 2,
        status: 1,
        date: '2020-01-05 23:34:45',
        birthday: '2020-01-05',
        region: ['北京市', '市辖区', '西城区'],
        role: ['ROLE_USER'],
        desc: '镜出身在古老的神职者家族，从小接受系统严格的训练。她的父母在任务中意外失踪，留下了潜伏暗处的敌人和年幼无知的弟弟。一夜之间，家族的使命和长姐的责任落在镜的身上。为此，她抱着弟弟远走他乡，并抹去了家族的所有信息。'
    },
    {
        id: '100000005',
        name: '蒙犽',
        avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/524/524.jpg',
        account: 'mengya',
        phone: '18800008888',
        mail: 'mengya@mail.com',
        gender: 1,
        status: 1,
        date: '2020-01-06 21:12:12',
        birthday: '2020-01-06',
        region: ['北京市', '市辖区', '昌平区'],
        role: ['ROLE_USER'],
        desc: '在将军府邸中长大的少年蒙犽，自幼熟读兵书，但往往有着别出心裁的解读，幼时偶遇的机关大师，更是启迪了他对机关武器的热情和天赋，令他在传统兵法之上，创新出各种另辟蹊径的战术。'
    },
    {
        id: '100000006',
        name: '鲁班大师',
        avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/525/525.jpg',
        account: 'lubandashi',
        phone: '18800008888',
        mail: 'lubandashi@mail.com',
        gender: 1,
        status: 1,
        date: '2020-01-07 12:43:26',
        birthday: '2020-01-07',
        region: ['北京市', '市辖区', '大兴区'],
        role: ['ROLE_USER'],
        desc: '鲁班是与墨子不分伯仲的机关天才。为了心无旁骛地研究机关科学，他在本该毕业的年纪，依赖稷下无限制的学年机制，长期驻留院内。开启“代号鲁班”研发计划后，他创造出首个具有生命力的第七号机关，他也不由与之产生了父子般的感情。'
    },
    {
        id: '100000007',
        name: '西施',
        avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/523/523.jpg',
        account: 'xishi',
        phone: '18800008888',
        mail: 'xishi@mail.com',
        gender: 2,
        status: 1,
        date: '2020-01-08 12:32:11',
        birthday: '2020-01-08',
        region: ['北京市', '市辖区', '石景山区'],
        role: ['ROLE_USER'],
        desc: '无主之地并非无忧童年的乐土，西施自小学会了各种谋生的小把戏。但她童年首次倒卖捡来的宝贝，就意外欠下了一大笔债务。在躲避追赶时，她闯进了女神的古祠堂，并带出来一条富有魔力的轻纱。'
    },
    {
        id: '100000008',
        name: '马超',
        avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/518/518.jpg',
        account: 'machao',
        phone: '18800008888',
        mail: 'machao@mail.com',
        gender: 1,
        status: 1,
        date: '2020-01-09 11:31:11',
        birthday: '2020-01-09',
        region: ['北京市', '市辖区', '通州区'],
        role: ['ROLE_USER'],
        desc: '马超是一名冷静利落的战士。他本是西凉少寨主之一。他的父亲卷进武都战略、挑起同族相残。少寨主们本共同立誓维护西凉和平，却最终纷纷倒在刀尖之下，马超也被父亲关押。在族中长老帮助下，他连夜逃出，带着牺牲兄弟的遗物——四把冷晖枪，流落异乡。'
    },
    {
        id: '100000009',
        name: '曜',
        avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/522/522.jpg',
        account: 'yao',
        phone: '18800008888',
        mail: 'yao@mail.com',
        gender: 1,
        status: 1,
        date: '2020-01-10 09:15:38',
        birthday: '2020-01-10',
        region: ['北京市', '市辖区', '怀柔区'],
        role: ['ROLE_USER'],
        desc: '曜是一个从小怀抱英雄梦想的热血少年，与冷静强大的姐姐镜激烈的争夺着所有比赛的第一。尽管天性不同，但他们都到了稷下学习，渴望在这座象征着王者大陆最高智慧的学府中获得成长。'
    },
    {
        id: '100000010',
        name: '云中君',
        avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/506/506.jpg',
        account: 'yunzhongjun',
        phone: '18800008888',
        mail: 'yunzhongjun@mail.com',
        gender: 1,
        status: 1,
        date: '2020-01-11 14:12:18',
        birthday: '2020-01-11',
        region: ['北京市', '市辖区', '顺义区'],
        role: ['ROLE_USER'],
        desc: '云中君曾是一只孤鸟，与一只鹿结伴生存。在楚汉战火燃烧至云梦泽森林的时候，小鹿中箭死去，不久，悲伤至极的它将身躯粉碎在峭壁岩石。目睹这一幕的鬼谷子心怀同情，将其尸身骸骨运用转生之术重造，新生命具有人类的大部分形态，但可化作鸟类飞翔与战斗。'
    },
    {
        id: '100000011',
        name: '瑶',
        avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/505/505.jpg',
        account: 'yao',
        phone: '18800008888',
        mail: 'yao@mail.com',
        gender: 2,
        status: 1,
        date: '2020-01-12 11:32:23',
        birthday: '2020-01-12',
        region: ['北京市', '市辖区', '平谷区'],
        role: ['ROLE_USER'],
        desc: '鹿女阿瑶年幼时不小心闯入东神之城的边缘地带，受到那里村民的围攻。村民想杀掉她，同供品一起献祭给东神。东神使者云中君放她离去。'
    },
    {
        id: '100000012',
        name: '嫦娥',
        avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/515/515.jpg',
        account: 'change',
        phone: '18800008888',
        mail: 'change@mail.com',
        gender: 2,
        status: 1,
        date: '2020-01-13 12:11:54',
        birthday: '2020-01-13',
        region: ['北京市', '市辖区', '门头沟区'],
        role: ['ROLE_USER'],
        desc: '魔道一族乃是神的实验失败品，早期，他们与大陆的原生物种魔种共同劳作。北境严寒，但必须无休止的工作，日之塔才能亮起，为倒悬都市打上那束耀眼的长光。'
    },
    {
        id: '100000013',
        name: '百里守约',
        avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg',
        account: 'bailishouyue',
        phone: '18800008888',
        mail: 'bailishouyue@mail.com',
        gender: 1,
        status: 1,
        date: '2020-01-14 12:44:32',
        birthday: '2020-01-14',
        region: ['北京市', '市辖区', '密云区'],
        role: ['ROLE_USER'],
        desc: '无父无母的两个孩子，就这样顽强生活在长城之畔的镇子上。少年带着弟弟，以作零工为生。关市开启是人们最快活的日子，四面八方的商人和货物汇集着。少年穿梭其中，眼明手快，笑脸迎人，商人们也乐意关照他，慷慨给出更多赏金。闲暇时候，哥哥会将弟弟寄托到好心邻家，只身外出狩猎。他熟悉远近所有水草丰茂之地，无论野羚抑或大雁，最终都变成猎物满载而归。'
    }
];

const menuData = [
    {
        title: '首页',
        path: '/',
        id: '1000001',
        name: 'home',
        children: [
            {
                title: 'Dashboard',
                path: '/dashboard',
                id: '1000003',
                header: 'home',
                children: [
                    {
                        title: '主控台',
                        path: '/dashboard/console',
                        id: '1000015'
                    },
                    {
                        title: '监控页',
                        path: '/dashboard/monitor',
                        id: '1000016'
                    },
                    {
                        title: '工作台',
                        subtitle: 'Workplace',
                        path: '/dashboard/workplace',
                        id: '1000017'
                    }
                ]
            },
            {
                title: '系统管理',
                path: '/system',
                id: '1000004',
                header: 'home',
                children: [
                    {
                        title: '用户管理',
                        path: '/system/user',
                        id: '1000018'
                    },
                    {
                        title: '菜单权限管理',
                        path: '/system/menu',
                        id: '1000019'
                    },
                    {
                        title: '角色权限管理',
                        path: '/system/role',
                        id: '1000020'
                    }
                ]
            },
            {
                title: '表单页面',
                path: '/form',
                id: '1000005',
                header: 'home',
                children: [
                    {
                        title: '基础表单',
                        path: '/form/basic-form',
                        id: '1000021'
                    },
                    {
                        title: '高级表单',
                        path: '/form/advanced-form',
                        id: '1000022'
                    },
                    {
                        title: '分步表单',
                        path: '/form/step-form',
                        id: '1000023'
                    },
                    {
                        title: '表单详情',
                        path: '/form/detail',
                        id: '1000024'
                    }
                ]
            },
            {
                title: '列表页面',
                path: '/list',
                id: '1000006',
                header: 'home',
                children: [
                    {
                        title: '基础列表',
                        path: '/list/basic-list',
                        id: '1000025'
                    },
                    {
                        title: '卡片列表',
                        path: '/list/card-list',
                        id: '1000026'
                    },
                    {
                        title: '用户列表',
                        path: '/list/user-list',
                        id: '1000027'
                    },
                    {
                        title: '商品列表',
                        path: '/list/goods-list',
                        id: '1000028'
                    },
                    {
                        title: '查询表格',
                        path: '/list/table-list',
                        id: '1000029'
                    }
                ]
            },
            {
                title: '搜索页面',
                path: '/search',
                id: '1000007',
                header: 'home',
                children: [
                    {
                        title: '搜索列表（文章）',
                        path: '/search/search-article',
                        id: '1000030'
                    },
                    {
                        title: '搜索列表（项目）',
                        path: '/search/search-projects',
                        id: '1000031'
                    },
                    {
                        title: '搜索列表（应用）',
                        path: '/search/search-apps',
                        id: '1000032'
                    }
                ]
            },
            {
                title: '详情页面',
                path: '/profile',
                id: '1000008',
                header: 'home',
                children: [
                    {
                        title: '基础详情页',
                        path: '/profile/basic',
                        id: '1000033'
                    },
                    {
                        title: '高级详情页',
                        path: '/profile/advanced',
                        id: '1000034'
                    }
                ]
            },
            {
                title: '结果页面',
                path: '/result',
                id: '1000009',
                header: 'home',
                children: [
                    {
                        title: '成功页',
                        path: '/result/success',
                        id: '1000035'
                    },
                    {
                        title: '失败页',
                        path: '/result/fail',
                        id: '1000036'
                    }
                ]
            },
            {
                title: '异常页面',
                path: '/exception',
                id: '1000010',
                header: 'home',
                children: [
                    {
                        title: '403',
                        path: '/exception/403',
                        id: '1000037'
                    },
                    {
                        title: '404',
                        path: '/exception/404',
                        id: '1000038'
                    },
                    {
                        title: '500',
                        path: '/exception/500',
                        id: '1000039'
                    }
                ]
            },
            {
                title: '设置页面',
                path: '/setting',
                id: '1000011',
                header: 'home',
                children: [
                    {
                        title: '个人中心',
                        path: '/setting/user',
                        id: '1000040'
                    },
                    {
                        title: '个人设置',
                        path: '/setting/account',
                        id: '1000041'
                    }
                ]
            },
            {
                title: '编辑器',
                path: '/editor',
                id: '1000012',
                header: 'home',
                children: [
                    {
                        title: 'Quill',
                        path: '/editor/quill',
                        id: '1000042'
                    },
                    {
                        title: 'simpleMDE',
                        path: '/editor/simpleMDE',
                        id: '1000043'
                    }
                ]
            },
            {
                title: '工具',
                path: '/tool',
                id: '1000013',
                header: 'home',
                children: [
                    {
                        title: '内嵌页面',
                        path: '/tool/frame',
                        id: '1000044',
                        children: [
                            {
                                title: 'View UI 官网',
                                path: '/tool/frame/iview',
                                id: '1000047'
                            },
                            {
                                title: '爱奇艺',
                                path: '/tool/frame/iqiyi',
                                id: '1000048'
                            }
                        ]
                    },
                    {
                        title: '页面缓存',
                        path: '/tool/page-cache',
                        id: '1000045',
                        children: [
                            {
                                title: '开启缓存',
                                path: '/tool/page-cache/on',
                                id: '1000049'
                            },
                            {
                                title: '关闭缓存',
                                path: '/tool/page-cache/off',
                                id: '1000050'
                            },
                            {
                                title: '带参路由缓存1',
                                path: '/tool/page-cache/params/1',
                                id: '1000051'
                            },
                            {
                                title: '带参路由缓存2',
                                path: '/tool/page-cache/params/2',
                                id: '1000052'
                            }
                        ]
                    },
                    {
                        title: '日志',
                        path: '/tool/log',
                        id: '1000046',
                        children: [
                            {
                                title: '日志记录',
                                path: '/tool/log/record',
                                id: '1000053'
                            },
                            {
                                title: '错误捕捉',
                                path: '/tool/log/error',
                                id: '1000054'
                            },
                            {
                                title: 'Ajax 错误',
                                path: '/tool/log/ajax',
                                id: '1000055'
                            },
                            {
                                title: '控制台日志',
                                path: '/tool/log/console',
                                id: '1000056'
                            }
                        ]
                    }
                ]
            },
            {
                title: '多语言',
                path: '/i18n',
                id: '1000014',
                header: 'home'
            }
        ]
    },
    {
        title: '日志',
        path: '/log',
        id: '1000002',
        name: 'system'
    }
];

const roleData = [
    {
        id: '2000000001',
        name: 'ROLE_USER',
        desc: '普通用户',
        created_at: '2020-01-01 12:01:25',
        updated_at: '2020-01-02 13:10:33',
        default_role: 1,
        menu_list: ['1000001', '1000003', '1000015', '1000016', '1000017', '1000006', '1000025', '1000026', '1000027', '1000028', '1000029']
    },
    {
        id: '2000000002',
        name: 'ROLE_OP',
        desc: '运营用户',
        created_at: '2020-01-02 08:12:43',
        updated_at: '2020-01-04 22:12:28',
        default_role: 0,
        menu_list: ['1000001', '1000003', '1000005', '1000006', '1000007', '1000008', '1000009', '1000010', '1000011', '1000012', '1000013', '1000014', '1000015', '1000016', '1000017', '1000021', '1000022', '1000023', '1000024', '1000025', '1000026', '1000027', '1000028', '1000029', '1000030', '1000031', '1000032', '1000033', '1000034', '1000035', '1000036', '1000037', '1000038', '1000039', '1000040', '1000041', '1000042', '1000043', '1000044', '1000045', '1000046', '1000047', '1000048', '1000049', '1000050', '1000051', '1000052', '1000053', '1000054', '1000055', '1000056']
    },
    {
        id: '2000000003',
        name: 'ROLE_ADMIN',
        desc: '管理员用户',
        created_at: '2020-01-03 12:44:19',
        updated_at: '2020-01-06 14:02:22',
        default_role: 0,
        menu_list: ['1000001', '1000002', '1000003', '1000004', '1000005', '1000006', '1000007', '1000008', '1000009', '1000010', '1000011', '1000012', '1000013', '1000014', '1000015', '1000016', '1000017', '1000018', '1000019', '1000020', '1000021', '1000022', '1000023', '1000024', '1000025', '1000026', '1000027', '1000028', '1000029', '1000030', '1000031', '1000032', '1000033', '1000034', '1000035', '1000036', '1000037', '1000038', '1000039', '1000040', '1000041', '1000042', '1000043', '1000044', '1000045', '1000046', '1000047', '1000048', '1000049', '1000050', '1000051', '1000052', '1000053', '1000054', '1000055', '1000056']
    }
];

export default [
    {
        path: '/api/system/user/list',
        method: 'post',
        handle ({ body }) {
            const { name, phone, mail, gender, account, id, status, date, offset, limit, sortType, sortKey } = body;
            let data = [...userData];

            if (name) data = data.filter(item => item.name.indexOf(name) > -1);
            if (phone) data = data.filter(item => item.phone.indexOf(phone) > -1);
            if (mail) data = data.filter(item => item.mail.indexOf(mail) > -1);
            if (account) data = data.filter(item => item.account.indexOf(account) > -1);
            if (id) data = data.filter(item => item.id.indexOf(id) > -1);
            if (gender !== 0) data = data.filter(item => item.gender === gender);
            if (status !== 0) data = data.filter(item => item.status === status);
            if (date.length === 2) {
                const startTime = (new Date(date[0])).getTime();
                const endTime = (new Date(date[1])).getTime();
                data = data.filter((item) => {
                    const datetime = (new Date(item.date)).getTime();
                    if (datetime >= startTime && datetime <= endTime) {
                        return item;
                    }
                });
            }
            if (sortType !== 'normal') {
                data = data.sort((a, b) => {
                    if (sortType === 'asc') {
                        return a[sortKey] > b[sortKey] ? 1 : -1;
                    } else if (sortType === 'desc') {
                        return a[sortKey] < b[sortKey] ? 1 : -1;
                    }
                });
            }
            const total = data.length;
            data = data.slice(offset, offset + limit);

            return {
                code: 0,
                msg: '成功',
                data: {
                    list: data,
                    total: total
                }
            }
        }
    },
    {
        path: '/api/system/user/delete',
        method: 'post',
        handle ({ body }) {
            return {
                code: 0,
                msg: '抱歉，您没有该权限',
                data: {
                    msg: '抱歉，您没有该权限'
                }
            }
        }
    },
    {
        path: '/api/system/user/delete/multiple',
        method: 'post',
        handle ({ body }) {
            return {
                code: 0,
                msg: '抱歉，您没有该权限',
                data: {
                    msg: '抱歉，您没有该权限'
                }
            }
        }
    },
    {
        path: '/api/system/user/update',
        method: 'post',
        handle ({ body }) {
            return {
                code: 0,
                msg: '抱歉，您没有该权限',
                data: {
                    msg: '抱歉，您没有该权限'
                }
            }
        }
    },
    {
        path: '/api/system/user/create',
        method: 'post',
        handle ({ body }) {
            return {
                code: 0,
                msg: '抱歉，您没有该权限',
                data: {
                    msg: '抱歉，您没有该权限'
                }
            }
        }
    },
    {
        path: '/api/system/role/list',
        method: 'post',
        handle ({ body }) {
            const { offset, limit, sortType, sortKey } = body;
            let data = [...roleData];

            if (sortType !== 'normal') {
                data = data.sort((a, b) => {
                    if (sortType === 'asc') {
                        return a[sortKey] > b[sortKey] ? 1 : -1;
                    } else if (sortType === 'desc') {
                        return a[sortKey] < b[sortKey] ? 1 : -1;
                    }
                });
            }
            const total = data.length;
            data = data.slice(offset, offset + limit);

            return {
                code: 0,
                msg: '成功',
                data: {
                    list: data,
                    total: total
                }
            }
        }
    },
    {
        path: '/api/system/role/delete',
        method: 'post',
        handle ({ body }) {
            return {
                code: 0,
                msg: '抱歉，您没有该权限',
                data: {
                    msg: '抱歉，您没有该权限'
                }
            }
        }
    },
    {
        path: '/api/system/role/delete/multiple',
        method: 'post',
        handle ({ body }) {
            return {
                code: 0,
                msg: '抱歉，您没有该权限',
                data: {
                    msg: '抱歉，您没有该权限'
                }
            }
        }
    },
    {
        path: '/api/system/role/update',
        method: 'post',
        handle ({ body }) {
            return {
                code: 0,
                msg: '抱歉，您没有该权限',
                data: {
                    msg: '抱歉，您没有该权限'
                }
            }
        }
    },
    {
        path: '/api/system/role/create',
        method: 'post',
        handle ({ body }) {
            return {
                code: 0,
                msg: '抱歉，您没有该权限',
                data: {
                    msg: '抱歉，您没有该权限'
                }
            }
        }
    },
    {
        path: '/api/system/menu/list',
        method: 'post',
        handle ({ body }) {
            return {
                code: 0,
                msg: '成功',
                data: {
                    list: [...menuData]
                }
            }
        }
    },
    {
        path: '/api/system/role/menu/update',
        method: 'post',
        handle ({ body }) {
            return {
                code: 0,
                msg: '抱歉，您没有该权限',
                data: {
                    msg: '抱歉，您没有该权限'
                }
            }
        }
    },
    {
        path: '/api/system/menu/header/create',
        method: 'post',
        handle ({ body }) {
            return {
                code: 0,
                msg: '抱歉，您没有该权限',
                data: {
                    msg: '抱歉，您没有该权限'
                }
            }
        }
    },
    {
        path: '/api/system/menu/sider/create',
        method: 'post',
        handle ({ body }) {
            return {
                code: 0,
                msg: '抱歉，您没有该权限',
                data: {
                    msg: '抱歉，您没有该权限'
                }
            }
        }
    },
    {
        path: '/api/system/menu/delete',
        method: 'post',
        handle ({ body }) {
            return {
                code: 0,
                msg: '抱歉，您没有该权限',
                data: {
                    msg: '抱歉，您没有该权限'
                }
            }
        }
    },
    {
        path: '/api/system/menu/delete/multiple',
        method: 'post',
        handle ({ body }) {
            return {
                code: 0,
                msg: '抱歉，您没有该权限',
                data: {
                    msg: '抱歉，您没有该权限'
                }
            }
        }
    },
    {
        path: '/api/system/menu/update',
        method: 'post',
        handle ({ body }) {
            return {
                code: 0,
                msg: '抱歉，您没有该权限',
                data: {
                    msg: '抱歉，您没有该权限'
                }
            }
        }
    }
]

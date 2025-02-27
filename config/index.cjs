/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxd5f95cf22d55b24c',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '6195eea087d712235a7ec3400fd87017',

  PROVINCE: '河南',
  CITY: '郑州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '微信测试推送提醒',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oRlea5hARXCM2olPA7g9TtQf8lCg',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'xNPZ_QdisiZGqpjhRbjMbjjosM2ZbQpFH5EwbWbVEbk',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-05',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1996', date: '09-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '李四', year: '1996', date: '09-31',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-11-01' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],
  // 课程表相关配置
      // 如果courseSchedule不存在或者为空（null）则认为没有课程
      // 如果courseSchedule是一个数组，则认为不区分单双周，直接填写星期几对应的课表数据即可
      // 如果courseSchedule是一个对象（如下面所示）
      courseSchedule: [
        // 周一的课表
        [
          '08:30-10:10 大学体育',
          '10:25-12:05 大学英语读写',
          '14:00-14:45 大学计算机'
        ],
        // 周二
        [
          '08:30-10:10 学前儿童卫生与保育',
          '10:25-12:05 音乐',
          '14:00-16:45 普通心理学'
        ],
        // 周三
        [
          '08:30-10:10 美术',
          '10:25-12:05 大学计算机',
          '14:55-15:40 大学英语读写',
          '16:00-17:40 形势与政策'
        ],
        // 周四
        [
          '09:25-10:10 学前儿童卫生与保育',
          '10:25-11:10 大学英语听说',
          '11:20-12:05 普通话口语艺术',
          '14:00-15:40 思想道德修养与法律基础',
          '16:00-17:40 心理健康教育'
        ],
        // 周五
        [
          '08:00-10:10 舞蹈',
          '10:25-12:05 钢琴'
        ],
        // 周六
        [],
        // 周日
        []
      ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'xNPZ_QdisiZGqpjhRbjMbjjosM2ZbQpFH5EwbWbVEbk',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oRlea5rM9h9pIfZGQCz5CUz83nJg',
    }
  ],

}

module.exports = USER_CONFIG


export default function translation ($translateProvider) {
  $translateProvider.translations('zh', {
    'DIALOGS_OK': '确定',
    'DIALOGS_YES': '是',
    'DIALOGS_NO': '否',
    'DIALOGS_CLOSE': '关闭',
    'ajax': {
      'postFailMsg': '操作失败',
      'getFailMsg': '获取数据失败',
      'putFailMsg': '更新失败',
      'deleteFailMsg': '删除失败',
      'networkError': '网络连接失败',
    },
  });
  $translateProvider.preferredLanguage('zh');
}

translation.$inject = ['$translateProvider'];

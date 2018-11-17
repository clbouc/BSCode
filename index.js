
function indexMenu() {
    this.menu = [
        {
            img: 'source/images/1.jpg',
            title: '页面布局-弹出可拖动对话框',
            href: 'public/models/html/101-divpop.html',
            update: '2018-11-17',
            content: '可拖动div的使用'
        },
        {
            img: 'source/images/2.jpg',
            title: 'echarts使用',
            href: 'public/models/echarts/201-echarts.html',
            update: '2018-11-17',
            content: 'echarts图表的绘制'
        },
        {
            img: 'source/images/3.jpg',
            title: 'cesium使用',
            href: 'public/models/cesium/301-cesium.html',
            update: '2018-11-17',
            content: 'cesium 常用功能'
        },
        {
            img: 'source/images/4.jpg',
            title: 'bootstrap table 使用',
            href: 'public/models/bootstrap/301-cesium.html',
            update: '2018-11-17',
            content: 'bootstrap 使用'
        }

    ];

    this.init();
}

indexMenu.prototype.init = function () {
    for (var i = 0; i < this.menu.length; i++) {
        this.setContent(this.menu[i]);
    }
}

indexMenu.prototype.setContent = function (option) {

    var curModel = `<div class="post-masonry col-md-4 col-sm-6">
                            <div class="post-thumb">
                                <img src="`+ option.img + `" alt="">
                                <div class="title-over">
                                    <h4><a href="`+ option.href + `">` + option.title + `</a></h4>
                                </div>
                                <div class="post-hover text-center">
                                    <div class="inside">
                                        <i class="fa fa-plus"></i>
                                        <span class="date">`+ option.update + `</span>
                                        <h4><a href="`+ option.href + `">` + option.title + `</a></h4>
                                        <p>`+ option.content + `</p>
                                    </div>
                                </div>
                            </div>
                        </div>`;


    $('#main-body').append(curModel);
}

window.indexMenu = new indexMenu();

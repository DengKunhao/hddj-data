(function ($) {
    $.fn.extend({
       
        tabs: function(cfg){
            var defaultCfg = {
              
                auto: false,
               
                interval: 3000,
               	/*灏辨槸璁╂樉绀哄嚭鏉ョ涓€寮犲浘鐗囩鍑犳湡鐨勪笅鏍噀g锛氱12鏈熶笅鏍囨槸11*/
               	/*鍙渶瑕佹敼杩欓噷灏辫*/
                current:9,
                
                repeat: true,
                
                max_focus: 0,
                
                type: 'show',
                
                handle: '.handle',
               
                current_class: 'current',
                
                show: '.show',

                
                handle_event: 'click',
               
                pause_event: 'mouseover',
                
                run_event: 'mouseout',

                
                btn_next: '.next',
               
                btn_prev: '.prev',

                onChange: function (index) {}
            };
           
            return this.each(function(){
                var holder = $(this);

                var inited = holder.data('init-tabs');
                cfg = $.extend(inited || defaultCfg, cfg);
                holder.data({'init-tabs': cfg});

                // 锟芥儳鍢茶ぐ锟斤拷锟斤拷锟斤拷锟斤拷缁€锟�
                var btns = holder.find(cfg.handle).children();
                var show = holder.find(cfg.show)
                var items = show.children();
                var prev = holder.find(cfg.btn_prev);
                var next = holder.find(cfg.btn_next);

                // 锟斤拷锟斤拷濠氾拷锟斤拷锟斤拷锟斤拷锟斤拷锟介敓锟�
                var index = cfg.focus;
                var max = cfg.max_focus || items.length;
                var width = items.width();
                var height = items.height();
                // 锟借鲸姘拷锟�
                function render (i) {
                    if (cfg.repeat) {
                        i = (i + max) % max;
                    }
                    else {
                        i = Math.min(i, max);
                        i = Math.max(i, 0);
                    }
                    index = i;

                    btns.eq(i).addClass(cfg.current_class).siblings().removeClass(cfg.current_class);

                    switch(cfg.type){
                        case "slide":
                            show.animate({
                                marginTop: -height * i
                            });
                            break;
                        case "show": 
                            items.eq(i).show().siblings().hide();
                            break;
                        case "fade": 
                            items.eq(i).fadeIn().siblings().fadeOut();
                            break;
                        case "animate":
                            show.animate({
                                marginTop: -height * i
                            });
                            break;
                    }
                    cfg.onChange(i);
                }
                // 锟界瑳锟斤拷锟借鲸姘拷锟斤拷瀹ワ拷锟�
                render(cfg.current);

                // 锟斤拷锟斤拷锟斤拷锟窖咃拷锟藉瓨锟芥禍锟斤拷鎼粹€虫锭锟藉啿锟斤拷锟斤拷锟藉じ锟斤拷锟借缁憋拷锟藉锟斤拷缂傦拷锟斤拷鐐拷鐎ｂ晜锟斤拷锟藉锟姐劑锟斤拷鏉匡拷濞达拷锟藉锟斤拷閿燂拷
                if (inited) {
                    return;
                }

                // 锟藉锟芥慨鈺傦拷锟借姤锟斤拷锟芥硾锟斤拷鎷� 缂傦拷锟斤拷鐐拷锟斤拷锟斤拷锟斤拷锟斤拷搴滅槐锟斤拷锟姐劎锟斤拷锟芥嫹(interval)濞戯拷锟斤拷浠嬶拷锟斤拷笑锟斤拷濡囷拷椋庯拷锟斤拷锟斤拷锟芥嫹 index
                if( cfg.auto ){
                    var pause = false;
                    holder.on(cfg.pause_event, function(){
                        pause = true;
                    }).on(cfg.run_event, function(){
                        pause = false;
                    });

                    setInterval(function(){
                        if( pause ){return;}
                        render(index + 1);
                    }, cfg.interval);
                }

                // 锟斤拷锟藉畷鏌ワ拷婢讹拷锟斤拷锟斤拷锟斤拷瀵煎锟斤拷 href 锟斤拷锟斤拷锟斤拷甯涳拷锟斤拷锟斤拷锟介敓锟絟ash, 锟斤拷锟斤拷锟斤拷濡锟斤拷銊ワ拷锟斤拷锟斤拷鏉匡拷锟界櫢鎷�
                btns.on("click", function(e){
                    render($(this).index());
                    e.preventDefault();
                });

                prev.on('click', function(){
                	
                	
                    render(index - 1);
                });

                next.on('click', function(){
                    render(index + 1);
                    
                });

            });
        }
    });
})(jQuery);
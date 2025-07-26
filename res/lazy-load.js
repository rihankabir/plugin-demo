(function($){
    
    let images;
        
    $.fn.lazyLoad = function() {

        //we add lazy-load class for styling
        $(this).addClass('lazy-load');

        //Loop through all images and moves value of src to data-src attribute (if it's not done manualy already), 
        //then it removes src completely to avoid (cancel) image loading
        $(this).find('img').each((k,v)=>{
            $(v).attr('data-src',$(v).attr('src')).removeAttr('src');
        })
        
        let load = (image) => { 
            if($(image).position().top - $(window).scrollTop() < $(window).innerHeight() ){ // checks position of the image if it's on the screen, if yes then loading begins
            $(image).attr('src', $(image).attr('data-src')); // it takes url of image and put it in src aatribute, because now we want the image to be loaded
                $(image).one('load',()=>{ // we use one instead on, to be sure that it fires only once for each image
                    $(image).addClass('loaded').removeAttr('data-src'); // when image is loaded we add class loaded to indicate it, and we remove data-src attribute as we wont need it anymore
                    images = $(this).find('img:not(.loaded)'); // we check if we have more not loaded images
                    if(images.length>0) load($(images)[0]); else $(this).addClass('loaded'); //if yes then we call method itself with the next image as argument
                }).each((k,v)=>{
                    if(v.complete) $(v).trigger('load'); //if image is cached we trigger load event manually
                })
                
            }
        }
        
        // handling scroll event
        $(window).scroll(()=>{
            //if there are still some not loaded images, it calls load method on the first not loaded image
            if(images.length>0) load($(images)[0]);
        });

        //initial load
        images = $(this).find('img:not(.loaded)');
        if(images.length>0) load($(images)[0]);

    }
    
}(jQuery))
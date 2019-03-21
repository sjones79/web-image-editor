 const canvas = document.querySelector('#canvas');
 const ctx = canvas.getContext('2d');
 const textCanvas = new fabric.Canvas('textcanvas');

 let img = new Image();
 let fileName = '';
 let selectedTextOption = '';

 const downloadBtn = document.querySelector('#download-btn');
 const uploadFile = document.querySelector('#upload-file');
 const rotateBtn = document.querySelector('#rotate-btn');
 const revertBtn = document.querySelector('#revert-btn');
 const incrementInterval = 5;
 const decrementInterval = -5;


 // Add filters and effects
 document.addEventListener('click', (e) => {
     if(e.target.classList.contains('filter-btn')){
        if(e.target.classList.contains('rotate-add')){
            Caman('#canvas', img, function() {
                this.rotate(90).render();
            });
        }  
        else if(e.target.classList.contains('rotate-remove')){
            Caman('#canvas', img, function(){
                this.rotate(-90).render();
            });
        }
        else if(e.target.classList.contains('resize-add')){
            Caman('#canvas', img, function() {
                this.resize(90).render();
            });
        }  
        else if(e.target.classList.contains('resize-remove')){
            Caman('#canvas', img, function(){
                this.resize(-90).render();
            });
        }
        else if(e.target.classList.contains('flipx-add')){
            Caman('#canvas', img, function() {
                this.flip('x').render();
            });
        }  
        else if(e.target.classList.contains('flipx-remove')){
            Caman('#canvas', img, function(){
                this.flip('x').render();
            });
        }
        else if(e.target.classList.contains('flipy-add')){
            Caman('#canvas', img, function() {
                this.flip('y').render();
            });
        }  
        else if(e.target.classList.contains('flipy-remove')){
            Caman('#canvas', img, function(){
                this.flip('y').render();
            });
        }
        else if(e.target.classList.contains('brightness-add')){
             Caman('#canvas', img, function() {
                 this.brightness(incrementInterval).render();
             });
        }  
        else if(e.target.classList.contains('brightness-remove')){
             Caman('#canvas', img, function(){
                 this.brightness(decrementInterval).render();
             });
        }
        else if(e.target.classList.contains('contrast-add')){
            Caman('#canvas', img, function(){
                this.contrast(incrementInterval).render();
            });
        }
        else if(e.target.classList.contains('contrast-remove')){
            Caman('#canvas', img, function(){
                this.contrast(decrementInterval).render();
            });
        }
        else if(e.target.classList.contains('saturation-add')){
            Caman('#canvas', img, function(){
                this.saturation(incrementInterval).render();
            });
        }
        else if(e.target.classList.contains('saturation-remove')){
            Caman('#canvas', img, function(){
                this.saturation(decrementInterval).render();
            });
        }
        else if(e.target.classList.contains('vibrance-add')){
            Caman('#canvas', img, function(){
                this.vibrance(incrementInterval).render();
            });
        }
        else if(e.target.classList.contains('vibrance-remove')){
            Caman('#canvas', img, function(){
                this.vibrance(decrementInterval).render();
            });
        }
        else if(e.target.classList.contains('greyscale-add')){
            Caman('#canvas', img, function(){
                this.greyscale().render();
            });
        }
        else if(e.target.classList.contains('invert-add')){
            Caman('#canvas', img, function(){
                this.invert().render();
            });
        }
        else if(e.target.classList.contains('grungy-add')){
            Caman('#canvas', img, function(){
                this.grungy().render();
            });
        }
        else if(e.target.classList.contains('glowingsun-add')){
            Caman('#canvas', img, function(){
                this.glowingSun().render();
            });
        } 
        else if(e.target.classList.contains('vintage-add')){
            Caman('#canvas', img, function(){
                this.vintage().render();
            });
        }
        else if(e.target.classList.contains('lomo-add')){
            Caman('#canvas', img, function(){
                this.lomo().render();
            });
        }
        else if(e.target.classList.contains('clarity-add')){
            Caman('#canvas', img, function(){
                this.clarity().render();
            });
        }
        else if(e.target.classList.contains('sincity-add')){
            Caman('#canvas', img, function(){
                this.sinCity().render();
            });
        }
        else if(e.target.classList.contains('crossprocess-add')){
            Caman('#canvas', img, function(){
                this.crossProcess().render();
            });
        }
        else if(e.target.classList.contains('pinhole-add')){
            Caman('#canvas', img, function(){
                this.pinhole().render();
            });
        }
        else if(e.target.classList.contains('nostalgia-add')){
            Caman('#canvas', img, function(){
                this.nostalgia().render();
            });
        }
        else if(e.target.classList.contains('hermajesty-add')){
            Caman('#canvas', img, function(){
                this.herMajesty().render();
            });
        }
     }
     //Do stuff with text options
     
     if(e.target.classList.contains('text1')){
         if(document.querySelector('#text-1-container').classList.contains('border-success')){
            document.querySelector('#text-1-container').classList.remove('border-success');
         }
         if(document.querySelector('#text-2-container').classList.contains('border-success')){
            document.querySelector('#text-2-container').classList.remove('border-success');
         }
         if(document.querySelector('#text-3-container').classList.contains('border-success')){
            document.querySelector('#text-3-container').classList.remove('border-success');
         }
        document.querySelector('#text-1-container').classList.add('border-success');
        selectedTextOption = document.querySelector('#text-1-container .card-text').innerText;
        
     }
     if(e.target.classList.contains('text2')){
        if(document.querySelector('#text-1-container').classList.contains('border-success')){
            document.querySelector('#text-1-container').classList.remove('border-success');
         }
         if(document.querySelector('#text-2-container').classList.contains('border-success')){
            document.querySelector('#text-2-container').classList.remove('border-success');
         }
         if(document.querySelector('#text-3-container').classList.contains('border-success')){
            document.querySelector('#text-3-container').classList.remove('border-success');
         }
        document.querySelector('#text-2-container').classList.add('border-success');
        selectedTextOption = document.querySelector('#text-2-container .card-text').innerText;
    }
    if(e.target.classList.contains('text3')){
        if(document.querySelector('#text-1-container').classList.contains('border-success')){
            document.querySelector('#text-1-container').classList.remove('border-success');
         }
         if(document.querySelector('#text-2-container').classList.contains('border-success')){
            document.querySelector('#text-2-container').classList.remove('border-success');
         }
         if(document.querySelector('#text-3-container').classList.contains('border-success')){
            document.querySelector('#text-3-container').classList.remove('border-success');
         }
        document.querySelector('#text-3-container').classList.add('border-success');
        selectedTextOption = document.querySelector('#text-3-container .card-text').innerText;
    }
    Caman('#canvas', img, function(){
       if(selectedTextOption.length > 0 ){
           /* original code that worked but not quite formatted */
            ctx.font = '10em Verdana';
            ctx.textAlign = "center";
            ctx.fillStyle = "white";
            ctx.fillText(selectedTextOption, canvas.width/2, canvas.height/2);
       }
    });
     
    // console.log(selectedTextOption);

    /* New fabric code for playing around */
    var textObj = new fabric.Text(selectedTextOption,{
        fontStyle: 'italic',
        fontFamily: 'Delicious'
    });
    textCanvas.add(textObj);
 });

 // Revert Filters
 revertBtn.addEventListener('click', (e) => {
     Caman('#canvas', img, function() {
         this.revert();
     });
 });

 //Upload File
 uploadFile.addEventListener('change', (e) => {
     
    // Get File
    const file = document.querySelector('#upload-file').files[0];  //get our file

     // Init FileReader (developer.mozilla.org/en-US/docs/Web/API/FileReader)
     const reader = new FileReader();

     if(file){
         // Set file name
         fileName = file.name;

         //Read the data as URL
         reader.readAsDataURL(file);
     }

     // Add image to canvas
     reader.addEventListener('load', () =>{
         // Create the image
         img = new Image();
         //Set Src
         img.src = reader.result;
         //On Image Load, add to Canvas
         img.onload = function() {
             canvas.width = img.width;
             canvas.height = img.height;
             ctx.drawImage(img, 0, 0, img.width, img.height);             
             canvas.removeAttribute('data-caman-id');
         }


     }, false);

 });

 // Download Event
 downloadBtn.addEventListener('click', (e) =>{
    // Get the file extension
    const fileExtension = fileName.slice(-4); // going for .jpg or .png or .gif 
    //Init new file name
    let newFileName;

    //Check Image Type
    if(fileExtension.indexOf('.jpg') != -1 || fileExtension.indexOf('.png') != -1 ){
        newFileName = fileName.substring(0, fileName.length - 4) + '-edited.jpg';  //to remove the pre-existing extension use the substring call
    }

    // Call download
    download(canvas, newFileName);
 });

 function download(canvas, filename){
     // initialize an event
     let e;
     // create a link
     const link = document.createElement('a');

     // set some properties (mime type, quality/compression percentage -- 1 is 100%)
     link.download = filename;
     link.href = canvas.toDataURL('image/jpeg', 0.8);

     e = new MouseEvent('click');
     link.dispatchEvent(e);
     
 }

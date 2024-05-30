let slideIndex = 0;

        showSlides();

        function changeSlide(n) {
            showSlides(slideIndex += n);
        }

        function showSlides() {
            let slides = document.querySelectorAll('.slides img');
            let radioButtons = document.querySelectorAll('input[type="radio"][name="slider"]');
            let jhoannaContent = document.getElementById('jhoanna-content');
            let coletContent = document.getElementById('colet-content');
            let mikhaContent = document.getElementById('mikha-content');
            let maloiContent = document.getElementById('maloi-content');
            let aiahContent = document.getElementById('aiah-content');
            let staceyContent = document.getElementById('stacey-content');
            let gwenContent = document.getElementById('gwen-content');
            let sheenaContent = document.getElementById('sheena-content');

            for (let i = 0; i < slides.length; i++) {
                slides[i].classList.remove('active');
            }

            if (slideIndex >= slides.length) {
                slideIndex = 0;
            } else if (slideIndex < 0) {
                slideIndex = slides.length - 1;
            }

            slides[slideIndex].classList.add('active');

            let bgImage = slides[slideIndex].getAttribute('data-bg');
            document.body.style.backgroundImage = `url('${bgImage}')`;

            // Check the corresponding radio button
            radioButtons.forEach((radio, index) => {
                if (index === slideIndex) {
                    radio.checked = true;
                } else {
                    radio.checked = false;
                }
            });

            if (slides[slideIndex].classList.contains('jo')) {
            jhoannaContent.style.display = 'block';
            coletContent.style.display = 'none';
            mikhaContent.style.display = 'none';
            maloiContent.style.display ='none';
            aiahContent.style.display = 'none';
            staceyContent.style.display = 'none';
            gwenContent.style.display ='none';
            sheenaContent.style.display = 'none';

            } else if (slides[slideIndex].classList.contains('colet')) {
            jhoannaContent.style.display = 'none';
            coletContent.style.display = 'block';
            mikhaContent.style.display = 'none';
            maloiContent.style.display ='none';
            aiahContent.style.display = 'none';
            staceyContent.style.display = 'none';
            gwenContent.style.display ='none';
            sheenaContent.style.display = 'none';
            
            } else if (slides[slideIndex].classList.contains('mikha')) {
            jhoannaContent.style.display = 'none';
            coletContent.style.display = 'none';
            mikhaContent.style.display = 'block';
            maloiContent.style.display ='none';
            aiahContent.style.display = 'none';
            staceyContent.style.display = 'none';
            gwenContent.style.display ='none';
            sheenaContent.style.display = 'none';
 
            } else if (slides[slideIndex].classList.contains('maloi')) {
            jhoannaContent.style.display = 'none';
            coletContent.style.display = 'none';
            mikhaContent.style.display = 'none';
            maloiContent.style.display ='block';
            aiahContent.style.display = 'none';
            staceyContent.style.display = 'none';
            gwenContent.style.display ='none';
            sheenaContent.style.display = 'none';
            } else if (slides[slideIndex].classList.contains('aiah')) {
            jhoannaContent.style.display = 'none';
            coletContent.style.display = 'none';
            mikhaContent.style.display = 'none';
            maloiContent.style.display ='none';
            aiahContent.style.display = 'block';
            staceyContent.style.display = 'none';
            gwenContent.style.display ='none';
            sheenaContent.style.display = 'none';
          
            } else if (slides[slideIndex].classList.contains('stacey')) {
            jhoannaContent.style.display = 'none';
            coletContent.style.display = 'none';
            mikhaContent.style.display = 'none';
            maloiContent.style.display ='none';
            aiahContent.style.display = 'none';
            staceyContent.style.display = 'block';
            gwenContent.style.display ='none';
            sheenaContent.style.display = 'none'; 
            }
            else if (slides[slideIndex].classList.contains('gwen')) {
            jhoannaContent.style.display = 'none';
            coletContent.style.display = 'none';
            mikhaContent.style.display = 'none';
            maloiContent.style.display ='none';
            aiahContent.style.display = 'none';
            staceyContent.style.display = 'none';
            gwenContent.style.display ='block';
            sheenaContent.style.display = 'none'; 

            } else if (slides[slideIndex].classList.contains('sheena')) {
            jhoannaContent.style.display = 'none';
            coletContent.style.display = 'none';
            mikhaContent.style.display = 'none';
            maloiContent.style.display ='none';
            aiahContent.style.display = 'none';
            staceyContent.style.display = 'none';
            gwenContent.style.display ='none';
            sheenaContent.style.display = 'block'; 

            }
        }
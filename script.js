// Function to update cat image and display information based on selection
function updateCatInfo() {
    const catSelector = document.getElementById('catSelector');
    const catImage = document.getElementById('catImage');
    const catInfo = document.getElementById('catInfo');
    const commentList = document.getElementById('commentList');
  
    const selectedCat = catSelector.value;
  
    // Clear previous information
    while (catInfo.firstChild) {
      catInfo.removeChild(catInfo.firstChild);
    }
    while (commentList.firstChild) {
      commentList.removeChild(commentList.firstChild);
    }
  
    // Display information based on selected cat
    if (selectedCat === 'white') {
        const informationElement = document.createElement('div');
        informationElement.innerHTML = `
        <p> <strong>White Cat</strong></p>

          <p><strong>Turkish Angora:</strong> Known for their stunning all-white coats and striking blue or amber eyes, Turkish Angoras are a graceful and intelligent breed. Originating from Turkey, they have a silky, semi-longhaired coat that requires regular grooming. These playful cats are social and form strong bonds with their human companions.</p>
          <p><strong>British Shorthair:</strong> The British Shorthair is a well-known breed with a distinctive round face, dense coat, and large eyes. While they come in various colors, the white British Shorthair is particularly charming. Their plush, short coat is easy to care for, and their calm demeanor makes them excellent indoor companions. With a robust build, they often have a sweet and easygoing temperament.</p>
        `;
        catInfo.appendChild(informationElement);
    
        // Display the external image for the white cat
        catImage.style.backgroundImage = "url('https://www.thesprucepets.com/thmb/5GfeWNbr0fUpSxpb7gUgMMb-bVY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/33131301_395369060960674_7259150430012178432_n-5b17d7eafa6bcc0036b523f2.jpg')";
    
        // Alert for white cat lovers
        alert("Here is a white cat lover!");
      } else if (selectedCat === 'orange') {
        const informationElement = document.createElement('div');
        informationElement.innerHTML = `
       <p> <strong>Orange Cat</strong></p>
          <p><strong>Tabby Cat:</strong> Many orange cats belong to the tabby pattern, displaying a mix of stripes, spots, and swirls on their fur. The orange tabby is not a specific breed but a coat color pattern found in various breeds. These cats are often affectionate and known for their playful nature.</p>
          <p><strong>Persian Cat:</strong> Persians can come in various colors, including a beautiful shade of orange. Known for their long, luxurious fur and distinctive flat face, these cats have a regal appearance. Despite their glamorous looks, Persians are generally calm and enjoy a relaxed indoor lifestyle.</p>
        `;
        catInfo.appendChild(informationElement);
    
        // Display the external image for the orange cat
        catImage.style.backgroundImage = "url('https://as1.ftcdn.net/v2/jpg/01/63/11/70/1000_F_163117064_syJkTuCddASYjvl4WqyRmnuy8cDXpoQY.jpg')";
        
        // Alert for orange cat lovers
        alert("Here is an orange cat lover!");
      } else if (selectedCat === 'black') {
        const informationElement = document.createElement('div');
        informationElement.innerHTML = `
        <p> <strong>Black Cat</strong></p>

          <p><strong>Bombay Cat:</strong> With a sleek, jet-black coat and bright copper or golden eyes, the Bombay cat resembles a miniature panther. This breed is known for its playful and affectionate nature, forming strong bonds with their owners. Their short, shiny coat requires minimal grooming.</p>
          <p><strong>Pantherette (Miniature Panther):</strong> While not an official breed, the term "Miniature Panther" is often used to describe black domestic shorthair cats. These cats, with their sleek black coats, evoke the elegance and mystique of a wild panther. They come in various personalities but are often playful and adaptable, making them great companions for different households.</p>
        `;
        catInfo.appendChild(informationElement);
    
        // Display the external image for the black cat
        catImage.style.backgroundImage = "url('https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/lucky-black-cat-square-lynne-iddon.jpg')";
    
        // Alert for black cat lovers
        alert("Here is a black cat lover!");
      }
    }
  
  // Function to submit and display comments
  function submitComment() {
    const commentInput = document.getElementById('commentInput');
    const commentList = document.getElementById('commentList');
  
    const commentText = commentInput.value;
    if (commentText.trim() !== '') {
      const commentElement = document.createElement('div');
      commentElement.textContent = commentText;
      commentList.appendChild(commentElement);
      commentInput.value = '';
    }
  }
  
  // Initialize the cat-themed playground
  document.addEventListener('DOMContentLoaded', () => {
    const catSelector = document.getElementById('catSelector');
  
    // Add change event listener to update cat image and display information
    catSelector.addEventListener('change', updateCatInfo);
  
    // Trigger the initial update when the page loads
    updateCatInfo();
  });
  
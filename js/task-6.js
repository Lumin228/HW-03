const book = {
    title: "The Last Kingdom",
    coverImage:
      "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
  };
  
  const {
    title,
    coverImage: bookCoverImage = "https://via.placeholder.com/640/480",
  } = book;
  
  console.log(title); // "The Last Kingdom"
  console.log(bookCoverImage); // "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg"
  
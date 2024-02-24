const gifContainer = document.querySelector("#gifContainer");
const queryInput = document.querySelector("#queryInput");
const searchBtn = document.querySelector("#searchBtn");
const removeBtn = document.querySelector("#removeBtn");

// search button logic
const searchBtnHandler = async (event) => {
  const query = queryInput.value;
  const url = await getImgUrl(query);
  createImg(url);
};

// get url from API based on the query
const getImgUrl = async (query) => {
  let response = await axios.get("https://api.giphy.com/v1/gifs/search",
    {params : {q : query, api_key : "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}});
  const url = response.data.data[0].images.original.url;
  return url;
};

// create image with given url
const createImg = (url) => {
  const newImg = document.createElement("IMG");
  newImg.src = url;
  gifContainer.append(newImg);
};

//remove button logic
const removeBtnHandler = () => {
  gifContainer.innerHTML = "";
};

searchBtn.addEventListener("click", function(event){
  event.preventDefault();
  searchBtnHandler();
});

removeBtn.addEventListener("click", function(event){
  event.preventDefault();
  removeBtnHandler();
});

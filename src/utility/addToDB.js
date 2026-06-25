//ReadList function

const getStoredBook = () => {
    const storedBookSTR = localStorage.getItem("readList");

    if (storedBookSTR) {
        const storedBookData = JSON.parse(storedBookSTR);
        return storedBookData;
    }
    else {
        return [];
    }
}


const addToStoredDB = (id) => {
    const storedBookData = getStoredBook();

    if (storedBookData.includes(id)) {
        alert("This id Already Exist");
    }
    else {
        storedBookData.push(id);
        // console.log(storedBookData);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readList", data)
    }
}





//WishList Function
const getStoredWishList = () => {
    const storedWishListSTR = localStorage.getItem("wishList");

    if(storedWishListSTR){
        const storedWishListData = JSON.parse(storedWishListSTR);
        return storedWishListData;
    }
    else{
        return [];
    }
     
}


const addToWishListDB = (id) => {
    const storedWishListData = getStoredWishList();

    if(storedWishListData.includes(id)){
        alert("This id is Already Exist");
    }
    else{
        storedWishListData.push(id);
        const data = JSON.stringify(storedWishListData);
        localStorage.setItem("wishList", data)
    }
}


export { addToStoredDB, getStoredBook, getStoredWishList, addToWishListDB };
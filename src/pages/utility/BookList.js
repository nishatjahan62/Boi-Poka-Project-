import toast from "react-hot-toast"

const getBookList = ()=>{
    const addBooks = localStorage.getItem("readList")

    if(addBooks){
        const AddedBooks= JSON.parse(addBooks)
        return AddedBooks
    }
    else{
        return []
    }
}


const addToList =(id)=>{
    const AddedBooks  = getBookList()

    if(AddedBooks.includes(id)){
        // alert("added")
        toast('Book already added')
        }

        else{
            AddedBooks.push(id)
            const books=JSON.stringify(AddedBooks)
            localStorage.setItem("readList", books)
        }
}
export {addToList}
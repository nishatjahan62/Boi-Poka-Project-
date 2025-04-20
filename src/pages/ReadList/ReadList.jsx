import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaArrowDown } from "react-icons/fa";
import { useLoaderData } from 'react-router';
import { getBookList } from '../utility/BookList';
import Book from '../Book/Book';





const ReadList = () => {

const [readList,setReadList]=useState([])
    const data = useLoaderData()
    console.log(data);
    
   
   
    

    useEffect(()=>{
        const AddedBooks =getBookList()
        const convertedAddedBooks = AddedBooks.map(id=> parseInt(id))
        const readList = data.filter(books=>convertedAddedBooks.includes(books.bookId))
       
        setReadList(readList)

    },[data])


    return (    
        <div className='mx-[115px] mb-[80px]'>
           <div className='bg-[#EEEEEE] mt-[50px] rounded-3xl text-center py-5'> <h1 className='text-green-600 font-bold  text-2xl'>Books</h1></div>
           <div className='flex justify-center mt-10'><a href="#_" className="  rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
    <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease "></span>
    <span class="relative flex items-center gap-2">Short By <span> <FaArrowDown /></span></span>
</a></div>


            <Tabs className={"mt-[80px] "}>
    <TabList >
      <Tab>Read Books</Tab>
      <Tab>WishList Books</Tab>
    </TabList>

    <TabPanel className={"mt-[40px]"}>
     
    {   readList.map((({image,bookName, author,rating,category,tags,yearOfPublishing,})=>
    <div className=' mb-5  border border-green-400 p-3 rounded-2xl flex gap-10'>
        <div className='bg-red-500 w-[200px] h-[210px] rounded-2xl '><img className='h-[100%] mx-auto py-5 ' src={image} alt="" /></div>
<div>
    <h1 className='text-green-600 font-bold text-xl'>{bookName}</h1>
    <p className='pb-4 pt-2 text-lg'>Book By: {author}</p>
    <div className='flex gap-3 items-center pb-4'><span className=''>Tags:</span>  
{
 tags.map((tag,index)=><button 
 key={index}
 className=' px-3 py-1.5 font-medium bg-blue-50 h text-[#23BE0A] rounded-2xl text-sm' 
 >#{tag}</button>)
}
</div>
<hr />
<div className='pt-5 flex gap-3'><button
 className=' px-3 py-1.5 font-medium bg-blue-50 h text-[#23BE0A] rounded-2xl text-sm' 
 > category: {category}</button>
 <button
 className=' px-3 py-1.5 font-medium bg-blue-50 h text-[#23BE0A] rounded-2xl text-sm' 
 >rating :{rating}</button>
 <button
 className=' px-3 py-1.5 font-medium bg-blue-50 h text-[#23BE0A] rounded-2xl text-sm' 
 >View Details</button>
 </div>

</div>

    </div>

    ))}
   
         
     <div className=''>
      </div> 
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ReadList;
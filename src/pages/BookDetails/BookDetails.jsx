import React from 'react';
import { TfiAgenda } from 'react-icons/tfi';
import { useLoaderData, useParams } from 'react-router';
import { addToList } from '../utility/BookList';

const BookDetails = () => {
const {id} = useParams()
const bookId = parseInt(id)
const data = useLoaderData()
const singleBook = data.find(book => book.bookId === bookId)
const {image, bookName,rating,category,review, author,tags,totalPages,yearOfPublishing,publisher}= singleBook


 const handleReadBooks =(id)=>{

    addToList(id)
 }


    return (
        <div>

           <div className='flex gap-10 items-center mt-[80px] mb-[80px] mx-[115px]'>
           <div className='w-1/2  bg-[rgb(238,238,238)] rounded-2xl '>< img className=' mx-auto py-20 h-[600px] w-1/2 ' src={image} alt="" /></div>
           <div className='w-1/2'>
           <p className='text-3xl font-bold  text-[#23BE0A]'>{bookName} </p>
           <p className='text-base font-semibold pb-2 pt-2 '>Book By : <span className='font-bold text-[18px] '>{author}</span> </p>
           <hr />
           <p className='font-bold py-2 text-lg'> {category} </p>
           <hr />
           <p className='font-normal text-base py-2' ><span className='font-bold text-base'>Review :</span>  {review}</p>
           <p className='items-center pb-3 pt-2'> <span className='font-bold  text-lg'>Tags : </span>
            {
                 tags.map((tag, index)=><button
                 key={index}
                 className=' px-4 py-1.5 font-medium bg-blue-50 h text-[#23BE0A] rounded-2xl mx-2 text-sm'
                 >{tag}</button>)
            }
           </p>
           <hr />
           <div className='flex gap-15 items-center text-base mt-3'>
           <div className='font-normal'>
           <p className='pb-1.5 font-semibold'>Number of Pages:</p>
           <p className='pb-1.5 font-semibold'>Publisher:</p>
           <p className='pb-1.5 font-semibold'>Year of Publishing:</p>
           <p className='pb-1.5 font-semibold'>Rating: </p>
           </div>
          <div className='font-normal'>
           <p className='pb-1.5 font-semibold'>{totalPages}</p>
           <p className='pb-1.5 font-semibold'>{publisher}</p>
           <p className='pb-1.5 font-semibold'>{yearOfPublishing}</p>
           <p className='pb-1.5 font-semibold'> {rating} </p>
           </div> 
           </div>
           <div className="flex gap-5 mt-2">
        <a onClick={()=>handleReadBooks(id) } className="btn bg-white text-black rounded-lg">Read </a>
        <a className="btn bg-blue-400   text-white rounded-lg">Wishlist</a>

      </div>
           </div>
          
           </div>

        </div>
        
    );
};

export default BookDetails;
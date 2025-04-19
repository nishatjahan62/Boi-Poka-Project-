import React from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ({singleBook}) => {

    const {image,bookName,author,rating,category,tags,yearOfPublishing, bookId}= singleBook

    return (
      <Link to={`/bookDetails/${bookId}`}>
      <div >
           
      <div className="card h-[495px] bg-base-100 w-[356px] shadow-sm border-2 border-[#13131315] " >
<figure className='bg-[#EEEEEE] h-[245px] w-[70%] m-auto mt-7 rounded-2xl'>
<img className='w-[115px] h-[166px]'
  src={image}
  alt="Shoes" />
</figure>
<div className="card-body pt-7">
<div className='flex gap-3'>
{
 tags.map((tag, index)=><button
 key={index}
 className=' px-5 py-2.5 font-medium bg-blue-50 h text-[#23BE0A] rounded-2xl text-sm' 
 >{tag}</button>)
}
</div>
<h2 className="card-title font-bold text-2xl font-[playfair-display] pt-2"> <span className='whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px]' > {bookName}
</span>

<div className="badge badge-secondary">{yearOfPublishing}</div>
</h2>
<p className='font-[work-sans] font-semibold text-lg  '>By : {author}</p>
<div className='border-b-2 border-dotted'></div>
<div className="card-actions  items-center ">
  <div className='pr-50'>{category}</div>
  <div className=""> {rating}</div>
  <div className=""><FaStarHalfAlt />
  </div>
</div>
</div>
</div>
</div></Link>
        
    
    );
};

export default Book;
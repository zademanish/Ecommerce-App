import React, { useEffect, useState } from 'react'
import {useNavigate, useSearchParams } from 'react-router-dom'

const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    category:"",
    gender:"",
    color:"",
    size:[],
    material:[],
    brand:[],
    minPrice:0,
    maxPrice:100,
  })

  const [priceRange, setPriceRange] = useState([0,100]);

  const categories = ["Top Wear", "Bottom Wear"];
  const colors = [
    "Red",
    "Blue",
    "Green",
    "yellow",
    "Gray",
    "White",
    "Pink",
    "Navy",
    "Black"
  ]

  const sizes = ["XS","S","M","L","XL","XXL"]
  const materials = [
    "Cotton","Wool","Denim","Polyster","Silk","Linen","Viscose","Fleece"
  ];

  const brands = [
    "Urbban Threads","Modern Fit","Street Style","Beach Breeze","Fashionista","ChicStyle"
  ]

  const genders = ["Men","Women"];

  useEffect(()=>{
    const params = Object.fromEntries([...searchParams]);
    
    setFilters({
      category:params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 100,
    });
    setPriceRange([0,params.maxPrice || 100])
  },[searchParams]);

  const handleFilterChange = (e)=>{
    const {name, value, checked, type} = e.target;
  let newFilters = {...filters};
  if(type === "checkbox"){
  if(checked){
    newFilters[name] = [...(newFilters[name] || []), value];
  } else{
    newFilters[name] = newFilters[name].filter((item)=> item !== value);
  } 
  } else{
    newFilters[name] = value;
  }
  setFilters(newFilters);
  updateURLParams(newFilters)
  }

  const updateURLParams = (newFilters)=>{
    const params = new URLSearchParams();
    // {category :"Top wear", size:["XS","S"]}
    Object.keys(newFilters).forEach((key)=> {
      if(Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
        params.append(key, newFilters[key].join(","));
      } else if(newFilters[key]){
        params.append(key, newFilters[key]);
      }
    });
    setSearchParams(params);
    navigate(`?${params.toString()}`)
  }

  const handlePriceChange = (e)=>{
    const newPrice = e.target.value;
    setPriceRange([0, newPrice]);
    const newFilters = {...filters, minPrice:0,maxPrice:newPrice};
    setFilters(filters);
    updateURLParams(newFilters);
  }

  return (
    <div className='p-4'>
      <h3 className='text-xl font-medium text-gray-800 mb-4'>
        Filter
      </h3>
      {/* Category filter */}
      <div className='mb-6'>
        <label className='block text-gray-600 font-medium mb-2'>Category</label>
        {
          categories.map((category)=>(
            <div key={category} className='flex items-center mb-1'>
              <input type='radio' value={category} onChange={handleFilterChange} 
              checked={filters.category == category} name='category' className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300'/>
              <span className='text-gray-700'>{category}</span>
            </div>
          ))
        }

      </div>
        {/* Gender filter */}
      <div className='mb-6'>
        <label className='block text-gray-600 font-medium mb-2'>Gender</label>
        {
          genders.map((gender)=>(
            <div key={gender} className='flex items-center mb-1'>
              <input type='radio' value={gender} onChange={handleFilterChange}
              checked={filters.gender == gender}  name='gender' className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300'/>
              <span className='text-gray-700'>{gender}</span>
            </div>
          ))
        }
      </div>

      {/* colors Filter */}
      <div className='mb-6'>
          <label className='block text-gray-600 font-medium mb-2'>color</label>
          <div className='flex flex-wrap gap-2'>
            {
              colors.map((color)=>(
                <button key={color} value={color} onClick={handleFilterChange}  name='color' className={`w-8 h-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105 ${filters.color === color ? "ring-2 ring-blue-500" : ""}`} style={{backgroundColor: color.toLowerCase()}}></button>
              ))
            }
          </div>
      </div>

      {/* Size filter */}
      <div className='mb-6'>
        <label className='block to-gray-600 font-medium mb-2'>Size</label>
        {
          sizes.map((size)=>(
            <div key={size} className='flex items-center mb-1'>
              <input type='checkbox' value={size} checked={filters.size.includes(size)} onChange={handleFilterChange}  name='size' className='mr-2 h-4 text-blue-500 focus:ring-blue-400 border-gray-300'/>
              <span className='text-gray-700'>{size}</span>
            </div>
          ))
        }
      </div>

     {/* Material filter */}
     <div className='mb-6'>
        <label className='block to-gray-600 font-medium mb-2'>Material</label>
        {
          materials.map((material)=>(
            <div key={material} className='flex items-center mb-1'>
              <input type='checkbox' value={material} checked={filters.material.includes(material)} onChange={handleFilterChange}  name='material' className='mr-2 h-4 text-blue-500 focus:ring-blue-400 border-gray-300'/>
              <span className='text-gray-700'>{material}</span>
            </div>
          ))
        }
      </div>

      {/* Brand filter */}
      <div className='mb-6'>
        <label className='block to-gray-600 font-medium mb-2'>Brand</label>
        {
          brands.map((brand)=>(
            <div key={brand} className='flex items-center mb-1'>
              <input type='checkbox' value={brand} checked={filters.brand.includes(brand)} onChange={handleFilterChange} name='brand' className='mr-2 h-4 text-blue-500 focus:ring-blue-400 border-gray-300'/>
              <span className='text-gray-700'>{brand}</span>
            </div>
          ))
        }
      </div>

          {/* Price Range filter */}

          <div className='mb-8'>
            <label className='block text-gray-600 font-medium mb-2'>
              Price Range
            </label>
            <input type='range' name='priceRange' onChange={handlePriceChange} value={priceRange[1]} min={0} max={100} className='w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer'/>
            <div className='flex justify-between text-gray-600 mt-2'>
              <span>$0</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
    </div>
  )
}

export default FilterSidebar
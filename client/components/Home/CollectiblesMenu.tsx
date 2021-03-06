import { NextPage } from 'next'
import React, { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'

const styles = {
  container: 'flex flex-row items-center justify-between text-white',
  sort: 'flex flex-row items-center justify-evenly bold',
  sortButton: 'border-2 border-blue-500 rounded-3xl',
  icon: 'w-6 h-6 absolute top-2 right-1 cursor-pointer',
  dayItems: 'flex items-center justify-center',
  dayItem : 'p-2 rounded-3xl cursor-pointer bg-[#0f1c39] w-[130px] mx-[10px]',
  dayItemActive: 'bg-gradient-to-r from-[#1199fa] to-[#11d0fa]',
}

const itemsState = {
  dayItems : [
    { id: 'day-item-1', title: 'Today', active: false },
    { id: 'day-item-2', title: 'Last 7 Days', active: true },
    { id: 'day-item-3', title: 'Last 30 Days', active: false },
    { id: 'day-item-4', title: 'All Time', active: false },
  ],
  sortItems: [
    { id: 'sort-item-1', title: 'Sales Volume', pos: 0 },
    { id: 'sort-item-2', title: 'Most Likes', pos: 1 },
    { id: 'sort-item-3', title: 'Most Views', pos: 2 },
  ]
}

type DayItemType = {
  id: string;
  title: string;
  active: boolean;
} 

type SortItemType = {
  id: string;
  title: string;
  pos: number;
} 

export const CollectiblesMenu:NextPage = () => {
  const [dayItems, setDayItems] = useState(itemsState.dayItems);
  const [sortItems, setSortItems] = useState(itemsState.sortItems);

  const [currentSortItem, setCurrentSortIem] = useState(0);

  const handleDayItems = (item:DayItemType) => (ev:React.MouseEvent) => {
    const items = dayItems.map(i => {
      if(item.id === i.id) {
        i.active = true;
      } else {
        i.active = false;
      }
      return i;
    });
    setDayItems(items);
  }

  const handleSortItem = (ev:React.MouseEvent) => {
    console.log('click')
  }

  return (
    <div className={styles.container}>
      <div className={styles.sort}>
        <div>Sort By</div>
        <div className='ml-3 relative' onClick={handleSortItem}>
          <button style={{padding: '5px 25px 5px 8px'}} className={styles.sortButton}>{sortItems[currentSortItem].title}</button>
          <ChevronDownIcon className={styles.icon} />
        </div>
      </div>
      <div className={styles.dayItems}>
        {dayItems.map((item:DayItemType) =>(
          <button key={item.id} className={`${styles.dayItem} ${item.active ? styles.dayItemActive : '' }`} onClick={handleDayItems(item)}>{item.title}</button>
        ))}
      </div>
    </div>
  )
}

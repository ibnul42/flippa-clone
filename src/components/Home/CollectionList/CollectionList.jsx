import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';

const collectionItems = [
    {
        headText: "Built for Beginners",
        text: 'Low-maintenance dropship and content sites. Well-priced and earning a bit of cash.',
        bgColor: 'lightGreen'
    },
    {
        headText: "Buy Your Next Job",
        text: 'Amet consectetur adipisicing elit. Unde neque quas natus dolorem. Modi, necessitatibus. Voluptatibus.',
        bgColor: 'orange'
    },
    {
        headText: "Recession-Proof Category",
        text: 'Debitis quia consequatur rerum adipisci illum pariatur autem ratione minima! Magni, repellendus.',
        bgColor: 'crimson'
    },
    {
        headText: "The Sweet Spot",
        text: 'Exercitationem tempora animi temporibus quidem similique fuga corrupti.',
        bgColor: 'mediumspringgreen'
    },
    {
        headText: "Apps for the Masses",
        text: 'Veniam deserunt facilis laboriosam necessitatibus et quaerat adipisci est qui.',
        bgColor: 'hotpink'
    },
    {
        headText: "Ecommerce Heavy Heaters",
        text: 'Adipisci illum pariatur autem ratione minima facilis laboriosam necessitatibus repellendus.',
        bgColor: 'coral'
    }
]

function CollectionList() {
    return (
        <div className='collection_list'>
            <div className="row">
                {collectionItems.map((item, index) => (
                    <CollectionItem key={index} item={item} />
                ))}
                
            </div>
        </div>
    )
}

export default CollectionList

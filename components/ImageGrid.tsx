import React from 'react'
import Image from 'next/image'
import { GridImage, ImageGridData } from '../data/imageGridData';

const ImageGrid = () => {


    const gridImages = ImageGridData;

    const returnMargin = (index: number) => {
        if (index === 1 || index === 3 || index === 6 || index === 9 || index === 11) {
            return 'mt-12'
        }
        if (index === 4 || index === 7 || index === 10) {
            return '-mt-12'
        }

    }

    const gridStyle = { minWidth: '72px' }

    return (
        <div className="flex flex-nowrap items-center space-x-4 mt-44 overflow-x-hidden" >
            {
                gridImages.map(
                    (grid: GridImage, index: number) => {
                        return <div className={"h-72 lg:h-96 2xl:h-xxl w-full relative flex-1 "
                            + (returnMargin(index + 1))
                        } key={index} style={gridStyle}>
                            <Image
                                src={grid.image}
                                layout="fill"
                                objectFit="cover"
                                quality={100}
                                alt="grid image"
                            />
                        </div>
                    }
                )

            }

        </div>

    )
}

export default ImageGrid

interface HorizontalScrollCarouselProps {
    children: React.ReactNode;
}

const HorizontalScrollCarousel: React.FC<HorizontalScrollCarouselProps> = ({ children }) => {

    return (
        <div className='horizontalScrollCarousel mb-4'>
            <div className="carouselContainer ">{children}</div>
        </div>
    );
};

export default HorizontalScrollCarousel;
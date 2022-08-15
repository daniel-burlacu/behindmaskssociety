import styled from 'styled-components';

export const Section = styled.section`
.item{
    min-height:20rem;
    min-width:18rem;
    padding:20px;
    img{
        width:100%;
        height:100%;
        border-radius:2rem;
        pointer-events:none;
    }
}
.inner-carousel {
    display:flex;
}

.carousel {
    width:800px;
    cursor:grab;
    overflow:hidden;
}

@media screen and (max-width: 1900px) {
    .item{
        min-height:20rem;
        min-width:18rem;
        padding:20px;
        
        img{
            width:100%;
            height:100%;
            border-radius:2rem;
            pointer-events:none;
        }
    }
    .inner-carousel {
        display:flex;
    }
    
    .carousel {
        width:800px;
        cursor:grab;
        overflow:hidden;
    }
}

@media screen and (min-width: 280px) and (max-width: 1080px) {
    .item{
        min-height:20rem;
        min-width:18rem;
        padding:20px;
        img{
            width:100%;
            height:100%;
            border-radius:2rem;
            pointer-events:none;
        }
    }
    .inner-carousel {
        display:flex;
    }
    
    .carousel {
        width:350px;
        height:400px;
        cursor:grab;
        overflow:hidden;
    }
}

`
<template>
    <ul class="contentContainer">
            <li class="contentSquare"><img class="contentThumbnail" src="/public/asset/image2.jpg" alt=""></li>
            <li class="contentSquare"><img class="contentThumbnail" src="/public/asset/image2.jpg" alt=""></li>
            <li class="contentSquare"><img class="contentThumbnail" src="/public/asset/image2.jpg" alt=""></li>
            <li class="contentSquare"><img class="contentThumbnail" src="/public/asset/image2.jpg" alt=""></li>
            <li class="contentSquare"><img class="contentThumbnail" src="/public/asset/image2.jpg" alt=""></li>
            <li class="contentSquare"><img class="contentThumbnail" src="/public/asset/image2.jpg" alt=""></li>
            <li class="contentSquare"><img class="contentThumbnail" src="/public/asset/image2.jpg" alt=""></li>
            <li class="contentSquare"><img class="contentThumbnail" src="/public/asset/image2.jpg" alt=""></li>
            <li class="contentSquare"><img class="contentThumbnail" src="/public/asset/image2.jpg" alt=""></li>
            <li class="contentSquare"><img class="contentThumbnail" src="/public/asset/image2.jpg" alt=""></li>
            <li class="contentSquare"><img class="contentThumbnail" src="/public/asset/image2.jpg" alt=""></li>
            <li class="contentSquare"><img class="contentThumbnail" src="/public/asset/image2.jpg" alt=""></li>
            <li class="contentSquare"><img class="contentThumbnail" src="/public/asset/image2.jpg" alt=""></li>
            <li class="contentSquare"><img class="contentThumbnail" src="/public/asset/image2.jpg" alt=""></li>
            <li class="contentSquare"><img class="contentThumbnail" src="/public/asset/image2.jpg" alt=""></li>
    </ul>
</template>
    
<script>
export default {
}
</script>

<style scoped>
.contentContainer {
    width: 100%;
    max-width: 566px;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    margin-top: 0.75rem;
    margin-bottom: 0.5rem;    
}

.contentSquare {
    flex: 33.3333%;
    width: 33.3333%;
    cursor: pointer;
    padding: 1px;
}

.contentThumbnail {
    display: block;
    object-position: 50% 50%;
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 2.5px;
    aspect-ratio: 1 / 1;
}
</style>

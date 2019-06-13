<template>
    <div id="photos">
        <gallery :images="images" :index="index" @close="index = null"></gallery>
        <div
                class="image"
                v-for="(image, imageIndex) in images"
                :key="imageIndex"
                @click="index = imageIndex"
                :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
        ></div>
        <div>
            <p>{{ $t("photos.attribution")}}<br /><a href="https://www.instagram.com/ryan_reinaldo/">(@Ryan_Reinaldo)</a></p>
        </div>
    </div>
</template>

<style scoped lang="less">
    .image {
        float: left;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        border: 1px solid #ebebeb;
        margin: 5px;
    }
</style>


<script>
    import VueGallery from 'vue-gallery';

    export default {
        components: {
            gallery: VueGallery,
        },
        data() {
            return {
                images: [
                    'https://wedpage-assets.s3.eu-central-1.amazonaws.com/gallery/pre-wedding/photo1.jpg',
                    'https://wedpage-assets.s3.eu-central-1.amazonaws.com/gallery/pre-wedding/photo2.jpg',
                    'https://wedpage-assets.s3.eu-central-1.amazonaws.com/gallery/pre-wedding/photo3.jpg',
                    'https://wedpage-assets.s3.eu-central-1.amazonaws.com/gallery/pre-wedding/photo4.jpg',
                    'https://wedpage-assets.s3.eu-central-1.amazonaws.com/gallery/pre-wedding/photo5.jpg',
                    'https://wedpage-assets.s3.eu-central-1.amazonaws.com/gallery/pre-wedding/photo6.jpg',
                    'https://wedpage-assets.s3.eu-central-1.amazonaws.com/gallery/pre-wedding/photo7.jpg',
                    'https://wedpage-assets.s3.eu-central-1.amazonaws.com/gallery/pre-wedding/photo8.jpg',
                    'https://wedpage-assets.s3.eu-central-1.amazonaws.com/gallery/pre-wedding/photo9.jpg',
                    'https://wedpage-assets.s3.eu-central-1.amazonaws.com/gallery/pre-wedding/photo10.jpg',
                    'https://wedpage-assets.s3.eu-central-1.amazonaws.com/gallery/pre-wedding/photo11.jpg',
                    'https://wedpage-assets.s3.eu-central-1.amazonaws.com/gallery/pre-wedding/photo12.jpg',
                    'https://wedpage-assets.s3.eu-central-1.amazonaws.com/gallery/pre-wedding/photo13.jpg',
                    'https://wedpage-assets.s3.eu-central-1.amazonaws.com/gallery/pre-wedding/photo14.jpg',
                    'https://wedpage-assets.s3.eu-central-1.amazonaws.com/gallery/pre-wedding/photo15.jpg',
                ],
                index: null,
            };
        },
    };
</script>

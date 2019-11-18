<template>
    <h1>{{ title }}</h1>
</template>

<script>
export default {
    props: {
        title: {
            required: true,
            type: String
        }
    }
};
</script>
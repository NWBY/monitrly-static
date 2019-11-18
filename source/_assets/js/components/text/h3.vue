<template>
    <h3>{{ title }}</h3>
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
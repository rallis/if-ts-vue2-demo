<template>
    <div class="mt-5">
        <FirebaseUserSignIn :project_name="project_name"></FirebaseUserSignIn>
    </div>
</template>

<script>
import FirebaseUserSignIn from "@/components/FirebaseUserSignIn";

export default {
    props: ["project_name"],
    components: {
        FirebaseUserSignIn,
    },
    data() {
        return {};
    },
    methods: {},
    created() {
        // GA event
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: "login_visit",
        });
    },
};
</script>

<style></style>

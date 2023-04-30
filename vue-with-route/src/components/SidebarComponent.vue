<script setup lang="ts">
import { NavigationItem } from '@/models/NavigationItem';


const navLiks: NavigationItem[] = [
    new NavigationItem(1, 'Home', '/', "mdi-home"),
    new NavigationItem(2, 'About US', '/about', "mdi-home"),
    new NavigationItem(3, 'Contact Us', '/contact', "mdi-home")
]

</script>
<template>
    <v-navigation-drawer permanent absolute>
        <v-list :lines="false" density="compact" nav>
            <v-list-item v-for="(item, i) in navLiks" :key="i" :value="item" :href="item.href" active-color="primary">
                <template v-slot:prepend>
                    <v-icon :icon="item.icon"></v-icon>
                </template>

                <v-list-item-title v-text="item.name" ></v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

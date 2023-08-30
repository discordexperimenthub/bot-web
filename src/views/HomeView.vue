<template>
    <NavBar />
    <main class="bg-deh-black min-h-screen pt-28">
        <section class="w-full mb-28 flex flex-col items-center">
            <!-- Landing -->
            <div>
                Experiment Hub is an Open Source Discord Bot.
                <BotTag verified /> <!--  :textSize="'4rem'" -->
            </div>

            <div class="my-4">
                <!-- Buttons -->
                <a href="https://discord.com/api/oauth2/authorize?client_id=1078340529932222505&permissions=536882192&scope=applications.commands%20bot"
                    class="bg-deh-main p-1 rounded text-deh-white font-bold text-3xl mx-2">
                    <button>
                        Invite
                    </button>
                </a>
                <a href="https://discord.com/api/oauth2/authorize?client_id=1078340529932222505&permissions=536882192&scope=applications.commands%20bot"
                    class="bg-deh-main p-1 rounded text-deh-white font-bold text-3xl">
                    <button>
                        Server
                    </button>
                </a>
            </div>

        </section>
        <img src="../assets/img/servers.top.svg" class="fill-deh-server-slider">
        <!-- top-10 reltativ -> moves the svg down but i should jsut create a new wave -->
        <section class="w-full bg-deh-server-slider">
            <div class="font-bold text-deh-white text-center text-5xl relative lg:-top-10">
                <p class="underline">Servers</p>
                <div class="font-normal no-underline text-2xl">{{ $t("servers.desc", {c:servers})}}</div>
            </div>
            <template v-if="dummyMarqueeItems.length > 0">
                <div class="mx-8 flex flex-col items-center z-[2]">
                    <Vue3Marquee :clone="true" :duration="25" :direction="'reverse'" class="lg:max-w-7xl" :gradient="true"
                        :gradient-color="[25, 25, 25]" gradient-length="15%">
                        <div v-for="item in dummyMarqueeItems">
                            <a class="bg-slate-800 p-1 m-3 rounded w-56 h-[90px] flex" :href="item.invite">
                                <img :src="item.img" class="m-1 rounded-xl border-deh-border border-2">
                                <div class="pt-2 text-deh-second font-semibold">
                                    <div>{{ item.title }}</div>
                                    <div class="font-normal text-deh-black">+{{ item.members }} Members</div>
                                </div>
                            </a>
                        </div>
                    </Vue3Marquee>
                    <Vue3Marquee :clone="true" :duration="25" class="lg:max-w-7xl" :gradient="true"
                        :gradient-color="[25, 25, 25]" gradient-length="15%">
                        <div v-for="item in dummyMarqueeItems">
                            <a class="bg-slate-800 p-1 m-3 rounded w-56 h-[90px] flex" :href="item.invite">
                                <img :src="item.img" class="m-1 rounded-xl border-deh-border border-2">
                                <div class="pt-2 text-deh-second font-semibold">
                                    <div>{{ item.title }}</div>
                                    <div class="font-normal text-deh-black">+{{ item.members }} Members</div>
                                </div>
                            </a>
                        </div>
                    </Vue3Marquee>
                </div>
            </template>

        </section>
        <img src="../assets/img/servers.buttom.svg" class="fill-deh-server-slider">

        <section class="md:min-h-[11rem] md:h-44" mt-4>
            <div class="font-bold text-deh-white text-center text-5xl underline">
                Features
            </div>
        </section>

        <img src="../assets/img/footer.top.svg" class="fill-deh-server-slider">
        <Footer />
    </main>
</template>

<script setup lang="ts">
import NavBar from '../components/Site/NavBar.vue';
import Footer from '../components/Site/Footer.vue';
import BotTag from '../components/other/BotTag.vue';

type marqeeObject = {
    img: string,
    title: string,
    verified: boolean,
    partnered: boolean,
    members: number,
    invite: string
}

const dummyMarqueeItems: marqeeObject[] = [
    {
        img: "https://cdn.discordapp.com/avatars/1078340529932222505/1eb32cf815319ff86f2271ef1ed32a18.png?size=2048",
        title: "Acronix Hub",
        verified: false,
        partnered: false,
        members: 0,
        invite: ""
    },
    {
        img: "https://cdn.discordapp.com/avatars/1078340529932222505/1eb32cf815319ff86f2271ef1ed32a18.png?size=2048",
        title: "Expermient Hub",
        verified: false,
        partnered: false,
        members: 0,
        invite: ""
    },
    {
        img: "https://cdn.discordapp.com/avatars/1078340529932222505/1eb32cf815319ff86f2271ef1ed32a18.png?size=2048",
        title: "Other Hub",
        verified: false,
        partnered: false,
        members: 0,
        invite: ""
    },
    {
        img: "https://cdn.discordapp.com/avatars/1078340529932222505/1eb32cf815319ff86f2271ef1ed32a18.png?size=2048",
        title: "Some other Server",
        verified: false,
        partnered: false,
        members: 0,
        invite: ""
    },
    {
        img: "https://cdn.discordapp.com/avatars/1078340529932222505/1eb32cf815319ff86f2271ef1ed32a18.png?size=2048",
        title: "A Community",
        verified: false,
        partnered: false,
        members: 0,
        invite: ""
    }
]

</script>

<script lang="ts">
export default {
    data() {
        return {
            servers: "Many",
            loading: false,
        }
    },
    methods: {
        getPosts() {
            fetch("https://japi.rest/discord/v1/application/1078340529932222505").then(async (req) => {
                if (req.ok) {
                    this.servers = `${(await req.json() as any).data.bot.approximate_guild_count}`;
                }
            })
        }
    },
    beforeMount() {
        this.getPosts();
    },
}
</script>
<template>
  <img src="../../assets/img/servers.top.svg" class="fill-deh-server-slider" />
  <!-- top-10 reltativ -> moves the svg down but i should jsut create a new wave -->
  <section class="w-full bg-deh-server-slider">
    <div class="font-bold text-deh-white text-center text-5xl relative lg:-top-10">
      <p class="underline">{{ $t("servers.server") }}</p>
      <div class="font-normal no-underline text-2xl">
        {{ $t("servers.desc", { c: serverString }) }}
        <span class="text-deh-white bg-deh-main rounded p-[2px] text-xs align-top font-bold">BOT</span>
      </div>
    </div>
    <template v-if="showDetaildServer && dummyMarqueeItems.length > 0">
      <div class="mx-8 flex flex-col items-center z-[2]">
        <Vue3Marquee :clone="true" :duration="25" :direction="'reverse'" class="lg:max-w-7xl" :gradient="true"
          :gradient-color="[25, 25, 25]" gradient-length="15%">
          <div v-for="item in dummyMarqueeItems">
            <a class="bg-slate-800 p-1 m-3 rounded w-56 h-[90px] flex" :href="item.invite">
              <img :src="item.img" class="m-1 rounded-xl border-deh-border border-2" />
              <div class="pt-2 text-deh-second font-semibold">
                <div>{{ shortString(item.title) }}</div>
                <div class="font-normal text-deh-black">
                  +{{ item.members }} {{ $t('servers.members') }}
                </div>
              </div>
            </a>
          </div>
        </Vue3Marquee>
        <Vue3Marquee :clone="true" :duration="25" class="lg:max-w-7xl" :gradient="true" :gradient-color="[25, 25, 25]"
          gradient-length="15%">
          <div v-for="item in dummyMarqueeItems">
            <a class="bg-slate-800 p-1 m-3 rounded w-56 h-[90px] flex" :href="item.invite">
              <img :src="item.img" class="m-1 rounded-xl border-deh-border border-2" />
              <div class="pt-2 text-deh-second font-semibold">
                <div>{{ shortString(item.title) }}</div>
                <div class="font-normal text-deh-black">
                  +{{ item.members }} {{ $t('servers.members') }}
                </div>
              </div>
            </a>
          </div>
        </Vue3Marquee>
      </div>
    </template>
  </section>
  <img src="../../assets/img/servers.bottom.svg" class="fill-deh-server-slider" />
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';

type marqeeObject = {
  img: string;
  title: string;
  verified: boolean;
  partnered: boolean;
  members: number;
  invite: string;
};

function shortString(title: string) {
  return title.length >= 15 ? (title.substring(0, 12) + "...") : title
}

const dummyMarqueeItems: marqeeObject[] = [
  {
    img: "https://cdn.discordapp.com/avatars/1078340529932222505/1eb32cf815319ff86f2271ef1ed32a18.png?size=2048",
    title: "Acronix Hub",
    verified: false,
    partnered: false,
    members: 0,
    invite: "",
  },
  {
    img: "https://cdn.discordapp.com/avatars/1078340529932222505/1eb32cf815319ff86f2271ef1ed32a18.png?size=2048",
    title: "Expermient Hub",
    verified: false,
    partnered: false,
    members: 0,
    invite: "",
  },
  {
    img: "https://cdn.discordapp.com/avatars/1078340529932222505/1eb32cf815319ff86f2271ef1ed32a18.png?size=2048",
    title: "Other Hub",
    verified: false,
    partnered: false,
    members: 0,
    invite: "",
  },
  {
    img: "https://cdn.discordapp.com/avatars/1078340529932222505/1eb32cf815319ff86f2271ef1ed32a18.png?size=2048",
    title: "Some other Server",
    verified: false,
    partnered: false,
    members: 0,
    invite: "",
  },
  {
    img: "https://cdn.discordapp.com/avatars/1078340529932222505/1eb32cf815319ff86f2271ef1ed32a18.png?size=2048",
    title: "A Community",
    verified: false,
    partnered: false,
    members: 0,
    invite: "",
  },
];

let serverString = "Many";
let showDetaildServer = ref(false);

function getPosts() {
  fetch(
    "https://japi.rest/discord/v1/application/1078340529932222505"
  ).then(async (req) => {
    if (req.ok) {
      serverString = `${((await req.json()) as any).data.bot.approximate_guild_count
        }`;
    }
  });
}

onBeforeMount(() => {
  getPosts();
})

</script>


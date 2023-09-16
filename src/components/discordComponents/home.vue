
<template>
  <discord-messages>
    <discord-message profile="voronWebhook"> 
        <img src="/feature.svg" height="22" width="22" class="inline-flex" />
        <span class="align-middle text-blue-500 font-bold test-xl ml-1 hover:cursor-pointer">Original Message</span>
        <br>
        <div class="code-block rounded border p-2 my-2 border-[#1e1f22] w-full">
            <span class="code-keyword">type </span>
            <span class="code-scopeName">AllowdTypes</span>
            <span> = </span>
            <span class="code-type">string</span>
            <span> | </span>
            <span class="code-type">number</span>
            <span> | </span>
            <span class="code-type">symbol</span>
            <span>;</span>

            <br>
            <span class="code-keyword">class </span>
            <span class="code-scopeName">List</span>
            <span> {{ "<T> {" }} </span>
            <br>
            <span class="code-scopeName">&nbsp;&nbsp;get</span>
            <span>: (key: AllowdTypes) => T;</span>
            <br>
            <span class="code-scopeName">&nbsp;&nbsp;getCount</span>
            <span>: (count:<span class="code-type"> number</span>) => T;</span>
            <br>
            <span class="code-scopeName">&nbsp;&nbsp;getAll</span>
            <span>: () => <span class="code-scopeName">Array</span>{{ "<T>;" }}</span>
            <br>
            <span class="code-scopeName">&nbsp;&nbsp;set</span>
            <span>: (key:AllowdTypes, value: T) => T;</span>
            <br>
            <span class="code-scopeName">&nbsp;&nbsp;remove</span> 
            <span>: (key:AllowdTypes) => <span class="code-type">boolean</span>;</span>
            <br>
            <span class="code-scopeName">&nbsp;&nbsp;removeAll</span> 
            <span>: () => <span class="code-type">number</span>;</span>
            <br>
            <span>};</span>
        </div>
        <br>
        Just found that in an old project. Was one if my first compiled <code class="p-[1px] rounded bg-[#2b2d31]">.ts</code> files
        <br>
        <!-- <span class="command">/test</span> -->
    </discord-message>

    <discord-message profile="dehBotWebhook"> 
        <img src="/feature.svg" height="22" width="22" class="inline-flex" />
        <span class="align-middle text-blue-500 font-bold test-xl ml-1 hover:cursor-pointer">Original Message</span>
        <discord-embed
        slot="embeds"
        :embed-title=" $t('feature.home.component.title')"
        color="rgba(84, 97, 242, 1)"
      >
        <discord-embed-description slot="description">
        <span>
            <!-- Language Support -->
            <span class="font-bold">{{ $t('feature.home.component.langSupport') }}</span> 100%
            <br>
        </span>
        <br>
        <span>
            <!-- General Commands -->
            <span class="font-bold text-base">{{ $t('feature.home.component.generalCommand') }}</span><br>
            <span class="font-normal">
                <span class="command">/blog-post</span>,
                <span class="command">/help</span>,
                <span class="command">/message reminders list</span>,
                <span class="command">/message reminders cancel</span>,
                <span class="command">/ping</span>,
                <span class="">Remind Me</span>,
                <span class="command">/support-article</span>,
                <span class="command">/support-sections</span>
            </span>
        </span><br>
        <span>
            <!-- Dev Commands -->
            <span class="font-bold text-base">{{ $t('feature.home.component.devCommands') }}</span><br>
            <span class="font-normal">
                <span class="command">/eval</span>
            </span>
        </span>
        <br>
        <span>
            <!-- Mod Commands -->
            <span class="font-bold text-base">{{ $t('feature.home.component.modCommands') }}</span><br>
            <span class="font-normal">
                <span>Feature Message</span>,
                <span class="command">/settings</span>
            </span>
        </span>
        </discord-embed-description>

        <discord-embed-footer slot="footer" footer-image="/logo.png">
          Made with ❤️ by discord.gg/experiments
        </discord-embed-footer>
      </discord-embed>
    </discord-message>
    
  </discord-messages>
</template>

<style scoped>
.code-keyword {
    /* TODO */
    color:#dd7b68; 
}

.code-scopeName {
    color:#50b5ff;
}

.code-type {
    color: #ffa657;
}

.code-block {
    font-family: Consolas;
    background-color: #2b2d31;
}

:hover.command{
    cursor: pointer;
    background-color: #43498b;
}

.command {
    padding: 2px;
    background-color: #393d6b;
    border-radius: 4px; /**rounded */
    font-weight: 600;
}
</style>
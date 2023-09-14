<template>
  <discord-messages class="test">
    <discord-message profile="voronWebhook"> 
        <img src="/feature.svg" height="22" width="22" class="inline-flex" />
        <span class="align-middle text-blue-500 font-bold test-xl ml-1 hover:cursor-pointer">Featured Post</span>
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
            <span class="code-scopeName">&nbsp;&nbsp;get</span> <!-- TODO unsichbares zeichen fürs einrücken  -->
            <span>: (key: AllowdTypes) => T;</span>
            <br>
            <span class="code-scopeName">&nbsp;&nbsp;getCount</span> <!-- TODO unsichbares zeichen fürs einrücken  -->
            <span>: (count:<span class="code-type"> number</span>) => T;</span>
            <br>
            <span class="code-scopeName">&nbsp;&nbsp;getAll</span> <!-- TODO unsichbares zeichen fürs einrücken  -->
            <span>: () => <span class="code-scopeName">Array</span>{{ "<T>;" }}</span>
            <br>
            <span class="code-scopeName">&nbsp;&nbsp;set</span> <!-- TODO unsichbares zeichen fürs einrücken  -->
            <span>: (key:AllowdTypes, value: T) => T;</span>
            <br>
            <span class="code-scopeName">&nbsp;&nbsp;remove</span> <!-- TODO unsichbares zeichen fürs einrücken  -->
            <span>: (key:AllowdTypes) => <span class="code-type">boolean</span>;</span>
            <br>
            <span class="code-scopeName">&nbsp;&nbsp;removeAll</span> <!-- TODO unsichbares zeichen fürs einrücken  -->
            <span>: () => <span class="code-type">number</span>;</span>
            <br>
            <span>};</span>
        </div>
        <br>
        Just found that in an old File. Was one if my first compiled <code class="p-[1px] rounded bg-[#2b2d31]">.ts</code> files
        <br>
        <!-- <span class="command">/test</span> -->
    </discord-message>

    <discord-message profile="dehBotWebhook"> </discord-message>
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
    border-radius: 4px;
    font-weight: 600;
}
</style>
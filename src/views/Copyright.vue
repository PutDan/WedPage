<template>
    <div>
        <p><strong>{{ $t("copyright.title") }}</strong></p>
        <p>{{ $t("copyright.owner") }}:<br />Daniel Draper<br />Hedwig-Kettler-Str. 5<br />76137 Karlsruhe</p>
        <p>Kontakt:<br />Telefon: +49176-95767859<br />E-Mail: Germandrummer92 [at] gmail.com</p>
        <p> </p>
        <p>{{ $t("copyright.content") }}:</p>
        <p>{{ $t("copyright.contentlaw") }}<br />Daniel Draper<br />Hedwig-Kettler-Str. 5<br />76137 Karlsruhe</p>
        <br /> <br /> <br />
        <p id="icon-copyright">
            {{ $t("copyright.icons") }} <a href="https://www.freepik.com/" title="Freepik">Freepik</a>
            {{ $t("copyright.iconsfrom") }}
            <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
            {{ $t("copyright.iconslicense") }} <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0"
                               target="_blank">CC 3.0 BY</a>
        </p>
    </div>
</template>

<style scoped lang="less">
    @import "../style/App.less";
    #divider {
        background-color: @richgold;
    }

    #icon-copyright {
        font-size: small;
    }
</style>
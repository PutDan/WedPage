<template>
    <div>
        <p><strong>{{ $t("copyright.title") }}</strong></p>
        <p>{{ $t("copyright.owner") }}:<br />Daniel Draper<br />Hedwig-Kettler-Str. 5<br />76137 Karlsruhe</p>
        <p>Kontakt:<br />Telefon: +49176-95767859<br />E-Mail: Germandrummer92 [at] gmail.com</p>
        <p> </p>
        <p>{{ $t("copyright.content") }}:</p>
        <p>{{ $t("copyright.contentlaw") }}<br />Daniel Draper<br />Hedwig-Kettler-Str. 5<br />76137 Karlsruhe</p>
        <br /> <br /> <br />
        <p class="copyright">
            {{ $t("copyright.icons") }} <a href="https://www.freepik.com/" title="Freepik">Freepik</a>
            {{ $t("copyright.iconsfrom") }}
            <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
            {{ $t("copyright.iconslicense") }} <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0"
                               target="_blank">CC 3.0 BY</a>
        </p>
        <p class="copyright">
            {{ $t("copyright.images.attribution.title") }}
            <ul>
                <li>{{ $t("copyright.images.attribution.church")}}
                    <a href="https://commons.wikimedia.org/wiki/File:Karlsruhe_Kirche_am_Durlacher_Tor_meph666-2004-Nov-15-edited.jpg">Wikipedia Commons</a>
                    {{ $t("copyright.images.attribution.churchattribution") }} <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a></li>
                <li>{{ $t("copyright.images.attribution.brewery")}}
                    <a href="https://commons.wikimedia.org/wiki/File:Brasserie_Hoepfner.JPG">Wikipedia Commons</a>
                    {{ $t("copyright.images.attribution.breweryattribution") }} <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a></li>
            </ul>
        </p>
    </div>
</template>

<style scoped lang="less">
    @import "../style/App.less";
    #divider {
        background-color: @fontcolor;
    }

    .copyright {
        font-size: small;
    }
</style>
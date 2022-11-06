---
layout: page
---

<script setup>
import { VPTeamPage, VPTeamPageTitle, VPTeamMembers, VPTeamPageSection } from "vitepress/theme"

const coreMembers = [{
	avatar: "/avatar/herb.jpg",
	name: "Herbert He（惒泊）",
	title: "前端开发者、多个开源项目作者/贡献者/协作者",
	org: "Hapin",
	orgLink: "https://github.com/ha-pin",
	links: [
      { icon: 'github', link: 'https://github.com/HerbertHe' },
      { icon: 'twitter', link: 'https://twitter.com/HerbertHe_' }
    ],
	desc: "哈拼项目核心作者",
	sponsor: "https://www.patreon.com/HerbertHe"
}, {
  avatar: "/avatar/elgar.jpg",
  name: "俄力哈尔·阿达克（ەلعار اداق ۇلى）",
  title: "前端开发工程师",
  links: [
    { icon: "github", link: "https://github.com/elgar17" }
  ],
  desc: "哈拼输入法项目贡献者"
}]
// const partners = [...]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>哈拼输入法开发团队</template>
    <template #lead>
		哈拼输入法项目由哈拼开源项目驱动，下面是为哈拼输入法贡献的核心开发人员~
	</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="coreMembers" />
  <!-- <VPTeamPageSection>
    <template #title>Partners</template>
    <template #lead>...</template>
    <template #members>
      <VPTeamMembers size="small" :members="partners" />
    </template>
  </VPTeamPageSection> -->
</VPTeamPage>
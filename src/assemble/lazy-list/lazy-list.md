<!-- total-count-key / total-page-key 二选一 -->
<lazy-list card="xxx-card" :url="url" :request="requestObj" :page-key="currentPage" page-size="100"
           :list-key="list" :total-count-key="count" :total-page-key="totalPage"
           :on-tapped="onTapped">
    <card :item-data="item" :item-index="index" :checked="true/false"></card>
</lazy-list>
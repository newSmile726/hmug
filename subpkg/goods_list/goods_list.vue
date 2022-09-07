<template>
  <view>
    <van-card
      :thumb-link="`/subpkg/goods_detail/goods_detail?id=${item.goods_id}`"
      :thumb="item.goods_small_logo || defaultPic"
      v-for="item in goodslist"
      :key="item.goods_id"
      :price="item.goods_price | toflxed"
      :title="item.goods_name"
    />
  </view>
</template>

<script>
import { getGoodsListApi } from '@/api/goods.js';
import toast from '@/utils/toast.js';
export default {
  data() {
    return {
      queryData: {
        query: '',
        cid: '',
        pagenum: 1,
        pagesize: 10
      },
      goodslist: [],
      total: 0,
      isloding: false,
      // 默认的空图片
      defaultPic: 'https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png'
    };
  },
  methods: {
    async getGoodsList(stoppullDown) {
      this.isloding = true;
      const { goods, total } = await getGoodsListApi(this.queryData);
      this.isloding = false;
      this.goodslist = [...this.goodslist, ...goods];
      this.total = total;
      stoppullDown && stoppullDown();
    }
  },
  onLoad({ query }) {
    this.queryData.query = query;
    this.getGoodsList();
  },
  // 监听下拉
  onPullDownRefresh() {
    this.queryData = {
      query: this.queryData.query,
      cid: '',
      pagenum: 1,
      pagesize: 10
    };
    this.goodslist = [];
    this.total = 0;

    this.getGoodsList(() => {
      uni.stopPullDownRefresh();
    });
  },
  // 监听上拉触底
  onReachBottom() {
    if (this.queryData.pagenum * this.queryData.pagesize > this.total) return toast('亲，没有更多数据了哟');
    if (this.isloding) return;
    this.queryData.pagenum++;
    this.getGoodsList();
  }
};
</script>

<style lang="scss"></style>

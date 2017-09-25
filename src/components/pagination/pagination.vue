<template>
    <div>
        <ul class="pagination">
            <li v-show="curPage !== 1 " @click="goPrePage"><p>上一页</p></li>
            <li @click="goFirstPage" :class="{'active':curPage == 1}"><p>1</p></li>
            <li v-show="preEllip" @click="goPreEllipPage"><p>...</p></li>
            <li v-for="pageIndex in middlePages" @click="goPage(pageIndex)" :class="{'active':curPage == pageIndex}"
                :key="pageIndex">
                <p>{{pageIndex}}</p>
            </li>
            <li v-show="nextEllip" @click="goNextEllipPage"><p>...</p></li>
            <li v-show="pageNumber > 1" @click="goLastPage" :class="{'active':curPage == pageNumber}"><p>
                {{pageNumber}}</p></li>
            <li v-show="pageNumber !== curPage" @click="goNextPage"><p>下一页</p></li>
        </ul>
    </div>
</template>
<script>
    export default {
        data: function () {
            return {
                curPage: 1,
                preEllip: false,
                nextEllip: false
            };
        },
        props: {
            pageNumber: {
                type: Number,
                required: true,
                validator: function (value) {
                    return value >= 1;
                }
            }
        },
        computed: {
            middlePages: function () {
                if (this.pageNumber <= 2) {
                    return [];
                } else if (this.pageNumber <= 3) {
                    return [2];
                } else if (this.pageNumber <= 4) {
                    return [2, 3];
                } else if (this.pageNumber <= 5) {
                    if (this.curPage <= 2) {
                        this.preEllip = false;
                        this.nextEllip = true;
                        return [2, 3];
                    } else if (this.curPage <= 3) {
                        this.preEllip = false;
                        this.nextEllip = false;
                        return [2, 3, 4];
                    } else if (this.curPage <= 4) {
                        this.preEllip = true;
                        this.nextEllip = false;
                        return [2, 3, 4];
                    }
                } else if (this.pageNumber >= 6) {
                    if (this.curPage <= 2) {
                        this.preEllip = false;
                        this.nextEllip = true;
                        return [2, 3];
                    } else if (this.curPage <= 3) {
                        this.preEllip = false;
                        this.nextEllip = true;
                        return [this.curPage - 1, this.curPage, this.curPage + 1];
                    } else if (this.curPage <= this.pageNumber - 3) {
                        this.preEllip = true;
                        this.nextEllip = true;
                        return [this.curPage - 1, this.curPage, this.curPage + 1];
                    } else if (this.curPage <= this.pageNumber - 2) {
                        this.preEllip = true;
                        this.nextEllip = false;
                        return [this.curPage - 1, this.curPage, this.curPage + 1];
                    } else if (this.curPage < this.pageNumber) {
                        this.preEllip = true;
                        this.nextEllip = false;
                        return [this.curPage - 1, this.curPage];
                    } else if (this.curPage === this.pageNumber) {
                        return [this.curPage - 2, this.curPage - 1];
                    }
                }
            }
        },
        watch: {
            curPage: function (val) {
                // console.log('请求' + val + '页数据');
                // 此处添加请求数据的逻辑
            }
        },
        methods: {
            goPage: function (pageIndex) {
                // if (pageIndex === this.curPage) return;
                this.curPage = pageIndex;
            },
            goPrePage: function () {
                if (this.curPage > 1) {
                    this.curPage--;
                }
            },
            goNextPage: function () {
                if (this.curPage < this.pageNumber) {
                    this.curPage++;
                }
            },
            goPreEllipPage: function () {
                if (this.curPage > 4) {
                    this.curPage = this.curPage - 3;
                } else if (this.curPage > 3) {
                    this.curPage = this.curPage - 2;
                }
            },
            goNextEllipPage: function () {
                if (this.curPage < this.pageNumber - 3) {
                    this.curPage = this.curPage + 3;
                } else if (this.curPage < this.pageNumber - 2) {
                    this.curPage = this.curPage + 2;
                }
            },
            goFirstPage: function () {
                // if (this.curPage !== 1) {
                // this.goPage(1);
                // }
                this.curPage = 1;
            },
            goLastPage: function () {
                // if (this.curPage !== this.pageNumber) {
                // this.goPage(this.pageNumber);
                // }
                this.curPage = this.pageNumber;
            }
        }
    };
</script>
<style scoped>
    li {
        list-style: none;
    }

    .pagination {
        position: relative;
        font-size: 12px;
    }

    .pagination li {
        display: inline-block;
        margin: 0 5px;
        cursor: pointer;
    }

    .pagination li p {
        padding: 0.5rem 1rem;
        display: inline-block;
        border: 1px solid #ddd;
        background: #fff;
        color: #71777c;
    }

    .pagination li p:hover {
        background: #007fff;
    }

    .pagination li.active p {
        background: #007fff;
        color: #fff;
    }

</style>
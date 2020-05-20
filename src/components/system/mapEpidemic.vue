<template>
  <div class="container">
    <div class="epidemic">
      <div class="epidemic_title">
        <div class="epidemic_title_text">
          舆情列表
          <img src="../../assets/img/visual/组 25.png" alt="" />
        </div>
        <div class="time">
          <div class="picker" style="float:right">
            发布时间 :
            <el-date-picker
              size="mini"
              v-model="value1"
              type="daterange"
              style="width:55%;"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </div>
        </div>
      </div>
      <div class="epidemic_content">
        <div class="table">
          <!--
                    <el-table :data="frontList" border style="width: 100%">
                        <el-table-column prop="id" label="序号" width="50">
                        </el-table-column>
                        <el-table-column
                            prop="time"
                            label="发表时间"
                            width="180"
                        >
                        </el-table-column>
                        <el-table-column
                            prop="type"
                            label="疫情类别"
                        ></el-table-column>
                        <el-table-column prop="platform" label="疫情类别">
                        </el-table-column>
                        <el-table-column prop="content" label="内容">
                        </el-table-column>
                        <el-table-column prop="operation" label="操作">
                        </el-table-column>
                    </el-table>
                    <el-table :data="frontList" border style="width: 100%">
                        <el-table-column prop="id" label="序号" width="50">
                        </el-table-column>
                        <el-table-column
                            prop="time"
                            label="发表时间"
                            width="180"
                        >
                        </el-table-column>
                        <el-table-column
                            prop="type"
                            label="疫情类别"
                        ></el-table-column>
                        <el-table-column prop="platform" label="疫情类别">
                        </el-table-column>
                        <el-table-column prop="content" label="内容">
                        </el-table-column>
                        <el-table-column prop="operation" label="操作">
                        </el-table-column>
                    </el-table> -->
          <!-- 正面疫情 -->
          <div class="table_right">
            <div class="front_title commom_title">
              正面舆情
              <div class="img">
                <img src="../../assets/img/epidemic/组 25 拷贝 5.png" alt="" />
              </div>
            </div>
            <div class="front_content commom_table">
              <el-table
                :data="frontList"
                border
                style="width: 100%"
                :cell-style="cellStyle1"
              >
                <el-table-column prop="id" label="序号" width="50">
                </el-table-column>
                <el-table-column prop="time" label="发表时间" width="130">
                </el-table-column>
                <el-table-column prop="type" label="舆情类别"></el-table-column>
                <el-table-column prop="platform" label="平台">
                </el-table-column>
                <el-table-column prop="content" label="内容" width="130">
                </el-table-column>
                <el-table-column prop="operation" label="操作">
                </el-table-column>
              </el-table>
            </div>
          </div>
          <div class="table_center">
            <div class="center_title commom_title">
              中性舆情
              <div class="img">
                <img src="../../assets/img/epidemic/组 25 拷贝 7.png" alt="" />
              </div>
            </div>
            <div class="center_table commom_table">
              <el-table
                :data="frontList1"
                border
                style="width: 100%"
                :cell-style="cellStyle2"
              >
                <el-table-column prop="id" label="序号" width="50">
                </el-table-column>
                <el-table-column prop="time" label="发表时间" width="130">
                </el-table-column>
                <el-table-column prop="type" label="舆情类别"></el-table-column>
                <el-table-column prop="platform" label="平台">
                </el-table-column>
                <el-table-column prop="content" label="内容" width="130">
                </el-table-column>
                <el-table-column prop="operation" label="操作">
                </el-table-column>
              </el-table>
            </div>
          </div>
          <div class="table_left">
            <div class="front_title commom_title">
              反面舆情
              <div class="img">
                <img src="../../assets/img/epidemic/组 25 拷贝 8.png" alt="" />
              </div>
            </div>
            <div class="reverse_table commom_table">
              <el-table
                :data="frontList2"
                border
                style="width: 100%"
                :cell-style="cellStyle3"
              >
                <el-table-column prop="id" label="序号" width="50">
                </el-table-column>
                <el-table-column prop="time" label="发表时间" width="130">
                </el-table-column>
                <el-table-column prop="type" label="舆情类别"></el-table-column>
                <el-table-column prop="platform" label="平台">
                </el-table-column>
                <el-table-column prop="content" label="内容" width="130">
                </el-table-column>
                <el-table-column prop="operation" label="操作">
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      frontList: [
        {
          id: "01",
          time: "2020-06-26 12:56",
          type: "正面",
          platform: "微信",
          content: "民俗博物馆门口游客拾金不昧...",
          operation: "链接"
        },
        {
          id: "02",
          time: "2020-06-26 12:56",
          type: "正面",
          platform: "微信",
          content: "民俗博物馆门口游客拾金不昧...",
          operation: "链接"
        },
        {
          id: "03",
          time: "2020-06-26 12:56",
          type: "正面",
          platform: "微信",
          content: "民俗博物馆门口游客拾金不昧...",
          operation: "链接"
        },
        {
          id: "04",
          time: "2020-06-26 12:56",
          type: "正面",
          platform: "微信",
          content: "民俗博物馆门口游客拾金不昧...",
          operation: "链接"
        },
        {
          id: "05",
          time: "2020-06-26 12:56",
          type: "正面",
          platform: "微信",
          content: "民俗博物馆门口游客拾金不昧...",
          operation: "链接"
        },
        {
          id: "06",
          time: "2020-06-26 12:56",
          type: "正面",
          platform: "微信",
          content: "民俗博物馆门口游客拾金不昧...",
          operation: "链接"
        },
        {
          id: "07",
          time: "2020-06-26 12:56",
          type: "正面",
          platform: "微信",
          content: "民俗博物馆门口游客拾金不昧...",
          operation: "链接"
        },
        {
          id: "08",
          time: "2020-06-26 12:56",
          type: "正面",
          platform: "微信",
          content: "民俗博物馆门口游客拾金不昧...",
          operation: "链接"
        },
        {
          id: "09",
          time: "2020-06-26 12:56",
          type: "正面",
          platform: "微信",
          content: "民俗博物馆门口游客拾金不昧...",
          operation: "链接"
        },
        {
          id: "10",
          time: "2020-06-26 12:56",
          type: "正面",
          platform: "微信",
          content: "民俗博物馆门口游客拾金不昧...",
          operation: "链接"
        }
      ],
      frontList1: [
        {
          id: "01",
          time: "2020-06-26 12:56",
          type: "中性",
          platform: "微信",
          content: "民俗博物馆门口游客拾金不昧...",
          operation: "链接"
        },
        {
          id: "02",
          time: "2020-06-26 12:56",
          type: "中性",
          platform: "微信",
          content: "民俗博物馆门口游客拾金不昧...",
          operation: "链接"
        },
        {
          id: "03",
          time: "2020-06-26 12:56",
          type: "中性",
          platform: "微信",
          content: "民俗博物馆门口游客拾金不昧...",
          operation: "链接"
        },
        {
          id: "04",
          time: "2020-06-26 12:56",
          type: "中性",
          platform: "微信",
          content: "民俗博物馆门口游客拾金不昧...",
          operation: "链接"
        },
        {
          id: "05",
          time: "2020-06-26 12:56",
          type: "中性",
          platform: "微信",
          content: "民俗博物馆门口游客拾金不昧...",
          operation: "链接"
        },
        {
          id: "06",
          time: "2020-06-26 12:56",
          type: "中性",
          platform: "微信",
          content: "民俗博物馆门口游客拾金不昧...",
          operation: "链接"
        },
        {
          id: "07",
          time: "2020-06-26 12:56",
          type: "中性",
          platform: "微信",
          content: "民俗博物馆门口游客拾金不昧...",
          operation: "链接"
        },
        {
          id: "08",
          time: "2020-06-26 12:56",
          type: "中性",
          platform: "微信",
          content: "民俗博物馆门口游客拾金不昧...",
          operation: "链接"
        },
        {
          id: "09",
          time: "2020-06-26 12:56",
          type: "中性",
          platform: "微信",
          content: "民俗博物馆门口游客拾金不昧...",
          operation: "链接"
        },
        {
          id: "10",
          time: "2020-06-26 12:56",
          type: "中性",
          platform: "微信",
          content: "民俗博物馆门口游客拾金不昧...",
          operation: "链接"
        }
      ],
      frontList2: [
        {
          id: "01",
          time: "2020-06-26 12:56",
          type: "负面",
          platform: "微信",
          content: "民俗博物馆门口游客拾金不昧...",
          operation: "链接"
        },
        {
          id: "02",
          time: "2020-06-26 12:56",
          type: "负面",
          platform: "微信",
          content: "民俗博物馆门口游客拾金不昧...",
          operation: "链接"
        },
        {
          id: "03",
          time: "2020-06-26 12:56",
          type: "负面",
          platform: "微信",
          content: "民俗博物馆门口游客拾金不昧...",
          operation: "链接"
        },
        {
          id: "04",
          time: "2020-06-26 12:56",
          type: "负面",
          platform: "微信",
          content: "民俗博物馆门口游客拾金不昧...",
          operation: "链接"
        },
        {
          id: "05",
          time: "2020-06-26 12:56",
          type: "负面",
          platform: "微信",
          content: "民俗博物馆门口游客拾金不昧...",
          operation: "链接"
        },
        {
          id: "06",
          time: "2020-06-26 12:56",
          type: "负面",
          platform: "微信",
          content: "民俗博物馆门口游客拾金不昧...",
          operation: "链接"
        },
        {
          id: "07",
          time: "2020-06-26 12:56",
          type: "负面",
          platform: "微信",
          content: "民俗博物馆门口游客拾金不昧...",
          operation: "链接"
        },
        {
          id: "08",
          time: "2020-06-26 12:56",
          type: "负面",
          platform: "微信",
          content: "民俗博物馆门口游客拾金不昧...",
          operation: "链接"
        },
        {
          id: "09",
          time: "2020-06-26 12:56",
          type: "负面",
          platform: "微信",
          content: "民俗博物馆门口游客拾金不昧...",
          operation: "链接"
        },
        {
          id: "10",
          time: "2020-06-26 12:56",
          type: "负面",
          platform: "微信",
          content: "民俗博物馆门口游客拾金不昧...",
          operation: "链接"
        }
      ],
      cellStyle1({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 2) {
          return "color:#14ED51";
        } else {
          return "";
        }
      },
      cellStyle2({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 2) {
          return "color:#EDB214";
        } else {
          return "";
        }
      },
      cellStyle3({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 2) {
          return "color:#E51CE3";
        } else {
          return "";
        }
      }
    };
  }
};
</script>

<style lang="less" scoped>
body .el-table th.gutter {
  display: table-cell !important;
}

div.container {
  position: relative;
  background: url(../../assets/img/visual/bgc.png);
  background-size: cover;
  height: 100%;
  .epidemic {
    padding: 98px 20px 0;
    .epidemic_title {
      // transform: scale(0.8);
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .epidemic_title_text {
        position: absolute;
        top: 50px;
        left: 30px;
        font-size: 24px;
        color: #fff;
        img {
          margin-left: 25px;
        }
      }

      .time {
        position: absolute;
        bottom: -77px;
        right: -99px;
        color: #3ab5e9;
        /deep/.el-range-editor.el-input__inner {
          background: transparent;
        }
        /deep/.el-range-editor .el-range-input {
          background: transparent;
        }
      }
    }

    .epidemic_content {
      background: url(../../assets/img/visual/bg_table.png) no-repeat center top;
      padding-top: 60px;
      width: 1885px;
      margin-top: 20px;
      margin: 20px auto;
      height: 628px;
      background-size: 100%;
      -moz-background-size: 100%;
      -webkit-background-size: 100%;
      -o-background-size: 100%;
      div.table {
        // transform: scale(0.8);

        display: flex;
        justify-content: space-around;
        padding: 0 20px;
        .commom_title {
          color: #fff;
          display: flex;
          height: 45px;
          margin-left: 16px;
          align-items: center;
          .img {
            margin-left: 9px;
          }
        }
        .commom_table {
          padding: 10px;
          box-sizing: border-box;
          /deep/.el-table__body-wrapper,
          .el-table__footer-wrapper,
          .el-table__header-wrapper {
            color: #fff;
            font-size: 14px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          /deep/.el-table thead {
            color: #fff;
          }
          /deep/.el-table,
          .el-table__expanded-cell {
            background-color: transparent;
            border-color: #0c4e22;
          }
          /deep/ .el-table tr {
            background-color: transparent !important;
            border-color: #0c4e22;
          }
          /deep/ .el-table--enable-row-transition .el-table__body td,
          .el-table .cell {
            background-color: transparent;
            border-color: #0c4e22;
          }
          /deep/.el-table__header-wrapper {
            background-color: transparent !important;
            border-color: #0c4e22;
          }
          /deep/ .el-table td,
          .el-table th.is-leaf {
            background-color: transparent !important;
            border-color: #0c4e22;
          }
          /deep/ .el-table th {
            background-color: transparent !important;
            border-color: #0c4e22;
          }
          /deep/ .el-table td,
          .el-table th {
            padding: 0;
          }
          /deep/.el-table .cell,
          .el-table th div,
          .el-table--border td:first-child .cell,
          .el-table--border th:first-child .cell {
            text-align: center;
          }
          /deep/.el-table .cell,
          .el-table th div,
          .el-table--border td:first-child .cell,
          .el-table--border th:first-child .cell {
            padding: 0;
          }
          /deep/.el-table--border::after,
          .el-table--group::after,
          .el-table::before {
            background-color: #0c4e22 !important;
          }
          /* .el-table {
                            flex: 1;
                            margin-left: 10px;
                        } */
        }
        .table_right {
          flex: 1;
          height: 600px;
          border: 1px solid #0c4e22;
          margin-right: 10px;
        }
        .table_center {
          flex: 1;
          height: 600px;
          border: 1px solid #4c3d11;
          margin-right: 10px;
          .center_table {
            /deep/.el-table,
            .el-table__expanded-cell {
              background-color: transparent;
              border-color: #4c3d11;
            }
            /deep/ .el-table tr {
              background-color: transparent !important;
              border-color: #4c3d11;
            }
            /deep/ .el-table--enable-row-transition .el-table__body td,
            .el-table .cell {
              background-color: transparent;
              border-color: #4c3d11;
            }
            /deep/.el-table__header-wrapper {
              background-color: transparent !important;
              border-color: #4c3d11;
            }
            /deep/ .el-table td,
            .el-table th.is-leaf {
              background-color: transparent !important;
              border-color: #4c3d11;
            }
            /deep/ .el-table th {
              background-color: transparent !important;
              border-color: #4c3d11;
            }
            /deep/ .el-table td,
            .el-table th {
              padding: 0;
            }
            /deep/.el-table .cell,
            .el-table th div,
            .el-table--border td:first-child .cell,
            .el-table--border th:first-child .cell {
              text-align: center;
            }
            /deep/.el-table .cell,
            .el-table th div,
            .el-table--border td:first-child .cell,
            .el-table--border th:first-child .cell {
              padding: 0;
            }
            /deep/.el-table--border::after,
            .el-table--group::after,
            .el-table::before {
              background-color: #4c3d11 !important;
            }
            /* .el-table {
                            flex: 1;
                            margin-left: 10px;
                        } */
          }
        }
        .table_left {
          flex: 1;
          height: 600px;
          border: 1px solid #3f0b43;
          .reverse_table {
            /deep/.el-table,
            .el-table__expanded-cell {
              background-color: transparent;
              border-color: #3f0b43;
            }
            /deep/ .el-table tr {
              background-color: transparent !important;
              border-color: #3f0b43;
            }
            /deep/ .el-table--enable-row-transition .el-table__body td,
            .el-table .cell {
              background-color: transparent;
              border-color: #3f0b43;
            }
            /deep/.el-table__header-wrapper {
              background-color: transparent !important;
              border-color: #3f0b43;
            }
            /deep/ .el-table td,
            .el-table th.is-leaf {
              background-color: transparent !important;
              border-color: #3f0b43;
            }
            /deep/ .el-table th {
              background-color: transparent !important;
              border-color: #3f0b43;
            }
            /deep/ .el-table td,
            .el-table th {
              padding: 0;
            }
            /deep/.el-table .cell,
            .el-table th div,
            .el-table--border td:first-child .cell,
            .el-table--border th:first-child .cell {
              text-align: center;
            }
            /deep/.el-table .cell,
            .el-table th div,
            .el-table--border td:first-child .cell,
            .el-table--border th:first-child .cell {
              padding: 0;
            }
            /deep/.el-table--border::after,
            .el-table--group::after,
            .el-table::before {
              background-color: #3f0b43 !important;
            }
            /* .el-table {
                            flex: 1;
                            margin-left: 10px;
                        } */
          }
        }
      }
    }
  }
}
</style>

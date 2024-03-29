'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const {INTEGER, DATE, STRING} = Sequelize;
        await queryInterface.createTable('tokens', {

            id: {type: INTEGER, primaryKey: true, autoIncrement: true},
            tokenId: STRING(255),
            tokenSymbol: {type: STRING(32), allowNull: false},//姓名

            addressType: {type: INTEGER, defaultValue: "0"}, //0 单地址模式1 通过备注区分地址模式
            //
            depositState: {type: STRING(10), defaultValue: "OPEN"},//吃了餐厅个数
            withdrawState: {type: STRING(10), defaultValue: 'OPEN'},//超越用户数 0~100%
            depositAddress: {type: STRING(50), allowNull: true},
            labelName: {type: STRING(32), allowNull: true},
            label: {type: STRING(32), allowNull: true},
            minimumDepositAmount: {type: INTEGER, defaultValue: 1},
            confirmationCount: {type: INTEGER, defaultValue: "20"},
            noticeMsg: {type: STRING(255), allowNull: true},
            created_at: DATE,//创建时间
            updated_at: DATE,//更新时间
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('tokens');
    }
};



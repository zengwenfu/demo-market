<template>
	<div class="add-weekly-window-wrap">
		<div class="window">
			<div class="field title-field">
				<label for="title">标题：</label>
  				<input type="text" name="title" placeholder="请输入标题" />
			</div>
            <div class="field">
                <label for="url">链接：</label>
                <input type="text" name="url" placeholder="请输入链接" />
            </div>
            <div class="field">
                <label for="author">作者：</label>
                <input type="text" name="author" placeholder="请输入作者">
            </div>
            <div class="field">
                <label for="summary">概要：</label>
                <textarea rows="6" cols="47" placeholder="请输入概要">
                </textarea>
            </div>
            <div class="handlers flex-container flex-direction-row">
                <div class="button" @click="onCancle">取消</div>
                <div class="button" @click="onSure">确定</div>
            </div>
		</div>
	</div>
</template>
<script>
    export default {
        methods: {
            onCancle () {
                this.$emit('onCancle');
            },
            onSure () {
                this.$emit('onSure');
            }
        }
    };
</script>
<style scoped>

    .add-weekly-window-wrap {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        left: 0;
        top: 0;
    }

    .window {
        width: 430px;
        height: 500px;
        background-color: #fff;
        margin: auto;
        margin-top: 100px;
        -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
        -moz-box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
        border-radius: 20px;
    }

    .field {
        padding: 20px;
    }

    .field.title-field {
        padding-top: 30px;
    }

    input {
        height: 30px;
        width: 300px;
        border-radius: 15px;
        border: 1px solid #ccc;
        padding-left: 10px;
    }

    textarea {
        border-radius: 15px;
        border: 1px solid #ccc;
        padding: 10px;
    }

    .button {
        height: 35px;
        width: 100px;
        background-color: #1296db;
        border-radius: 25px;
        color: #fff;
        text-align: center;
        line-height: 35px;
        margin-left: 20px;
        cursor: pointer;
    }

    .handlers {
        margin-top: 30px;
        justify-content: center;
    }
</style>
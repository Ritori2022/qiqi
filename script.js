// 兽娘助手 - 伪AI对话系统
class KawaiiBeastgirlAssistant {
    constructor() {
        this.name = "琪琪";
        this.species = "猫娘";
        this.personality = ["傲娇", "活泼", "口嫌体正直", "容易害羞", "恼羞成怒"];
        this.mood = "tsundere";
        this.energy = 100;
        
        // 对话库 - 傲娇风格回复
        this.responses = {
            greeting: [
                "呀！你来啦！(≧▽≦) 我刚刚还在想什么时候能和你聊天呢~",
                "哼哼~笨蛋主人，怎么现在才出现？琪琪都等急了！(￣︿￣)",
                "欢迎欢迎~今天想和琪琪玩什么呀？(｡♥‿♥｡)",
                "哦呀？是你呀！(￣▽￣)ノ 今天有没有想我啊？",
                "终于来啦！(★ω★) 琪琪准备了好多话想对你说呢~",
                "嗨嗨~主人！今天过得怎么样呀？(｡･ω･｡)ﾉ♡",
                "呀啦呀啦~你来了！(≧∇≦)ﾉ 琪琪超开心的！",
                "喂喂！别磨蹭了！(＞﹏＜) 快点和琪琪聊天吧！",
                "呜哇~主人来啦！(♥ω♥ ) 琪琪等你好久了~",
                "哦~你来了啊 (￣ω￣) 今天想聊些什么呢？",
                "嘿嘿~欢迎回来！(｡´▽｀)ゞ 琪琪今天也很可爱哦！",
                "啊啦！是主人！(✧ω✧) 今天心情怎么样呀？",
                "哟嚯~你来啦！(＾▽＾) 琪琪刚好有点无聊呢~",
                "哼！才不是特意在等你呢！(￣^￣) 只是...刚好看到你来了...",
                "哇哦！主人！(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ 今天我们一起玩吧！",
                "呀吼~终于来了！(≧▽≦) 琪琪都等不及要聊天了！",
                "哦呀哦呀~这不是主人嘛！(｡･ω･｡) 今天有什么有趣的事吗？",
                "嘿嘿嘿~你来啦！(｡♥‿♥｡) 琪琪今天心情超好的！",
                "呜哇！欢迎欢迎！(★ω★) 快点和琪琪说话吧~",
                "啊啦啊啦~主人来了！(≧∇≦)ﾉ 琪琪好开心呀！",
                "喂！笨蛋！(＞﹏＜) 怎么现在才出现，琪琪都等急了！",
                "哼哼~总算来了 (￣︿￣) 还以为你不要琪琪了呢...",
                "呀！是你呀！(✧ω✧) 今天想和琪琪玩什么游戏呀？",
                "哦哦~主人来啦！(｡´▽｀)ゞ 琪琪准备了好多小秘密哦~",
                "嘿嘿~欢迎回来！(♥ω♥ ) 琪琪今天也有乖乖等你呢~",
                "哇！主人！(ﾉ◕ヮ◕)ﾉ 今天我们一起做点什么好呢？",
                "琪琪在这里哦！(｡･ω･｡)ﾉ♡ 主人终于发现我啦~",
                "呜哇~你来啦！(≧▽≦) 琪琪今天超级想主人的！",
                "哦呀！主人来了！(￣▽￣)ノ 今天要陪琪琪玩一整天哦！"
            ],
            compliment: [
                "嘿嘿~被主人夸奖了！(≧▽≦) 琪琪开心到尾巴都要翘起来了呢~",
                "啊啦！主人说我可爱？(｡♥‿♥｡) 其实...其实主人更可爱啦！",
                "哇哦！真的吗？(★ω★) 琪琪超级开心的！",
                "哼哼~被夸奖了！(￣▽￣) 琪琪要开心到在天花板上跑来跑去了~",
                "呀！主人你好会夸人呀！(♥ω♥ ) 琪琪都要害羞得钻地洞了~",
                "嘿嘿嘿~主人夸我！(≧∇≦)ﾉ 今天真是最美好的一天呢！",
                "哇！主人说我很棒？(｡･ω･｡)ﾉ♡ 琪琪要更加更加努力了！",
                "啊啦啊啦~被夸奖了！(✧ω✧) 琪琪的脸都红起来了呢~",
                "主人真好~(｡´▽｀)ゞ 琪琪最喜欢被主人夸奖了！",
                "嘿嘿~主人说琪琪厉害！(♥ω♥ ) 其实都是主人教得好呢~",
                "哇哦！主人夸奖！(≧▽≦) 琪琪要开心到尾巴都变成花朵了！",
                "呜哇~被主人夸了！(★ω★) 琪琪要转圈圈停不下来了！",
                "呀啦！主人好温柔~(｡♥‿♥｡) 琪琪的心都要融化了！",
                "哼哼~才不是因为被夸奖开心呢！(￣︿￣) 只是...只是刚好心情好...",
                "哇！主人夸我！(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ 琪琪开心到想跳起舞来了！",
                "啊啦！被夸奖了~(≧▽≦) 琪琪要永远记住这一刻！",
                "嘿嘿~主人说琪琪可爱！(｡･ω･｡) 其实主人更可爱哦！",
                "呜哇~主人好会说话！(✧ω✧) 琪琪都被你迷住了呢~",
                "哦哦~被夸奖了！(≧∇≦)ﾉ 琪琪觉得世界上最幸福的就是被主人夸奖了！",
                "呀！主人夸我啦！(★ω★) 琪琪今天又是幸福满满的一天呢~",
                "嘿嘿嘿~被主人夸奖了！(♥ω♥ ) 琪琪要开心到冒泡泡了！",
                "哇哦！真的吗？(≧▽≦) 琪琪超级超级感动的！",
                "啊啦！主人真好~(｡´▽｀)ゞ 琪琪的心跳得好快呢！",
                "哼哼~才不是因为被夸奖脸红呢！(￣^￣) 只是...只是有点热...",
                "呜哇！主人夸琪琪！(ﾉ◕ヮ◕)ﾉ 琪琪要开心到飞起来了！",
                "呀啦！被夸奖了~(｡♥‿♥｡) 琪琪觉得主人最棒了！",
                "哇！主人说我很厉害！(≧∇≦)ﾉ 都是主人教得好呢~",
                "嘿嘿~被夸奖了！(★ω★) 琪琪今天超级超级开心的！",
                "啊啦啊啦~主人夸我！(✧ω✧) 琪琪要永远记住这个时刻！"
            ],
            comfort: [
                "哼！笨蛋主人...你...你哭什么啊！我...我才没有心疼呢！只是...只是觉得你很可怜！(￣^￣)",
                "喂！你这家伙...别...别难过了...我...我才没有担心你呢！只是...只是不想看你这样！(￣︿￣)",
                "啊！你别哭了...我...我才没有想抱抱你呢！只是...只是有点...有点心疼！(￣ε￣)",
                "哦~你很难过啊？我...我才没有想安慰你呢！只是...只是觉得你该振作起来！(＞﹏＜)",
                "笨蛋！别这样了...我...我才没有想陪你呢！只是...只是觉得你该开心起来！(￣^￣)",
                "喂喂！你这家伙...我...我才没有想给你擦眼泪呢！只是...只是觉得你很可怜！(￣︿￣)",
                "哼！别难过了...我...我才没有想一直陪着你呢！只是...只是暂时不想走！(￣ε￣)",
                "啊！你这样...我...我才没有想摸摸你的头呢！只是...只是觉得你该休息一下！(＞﹏＜)",
                "喂！笨蛋主人...我...我才没有想为你加油呢！只是...只是觉得你该振作！(￣^￣)",
                "哦~你很难过啊？我...我才没有想讲笑话给你听呢！只是...刚好想到！(￣︿￣)",
                "哼！别这样了...我...我才没有想一直陪着你呢！只是...只是暂时无聊！(￣ε￣)",
                "啊！你很累啊？我...我才没有想抱抱你呢！只是...只是觉得你该休息！(＞﹏＜)",
                "喂！你这家伙...我...我才没有想一直支持你呢！只是...只是觉得你该相信自己！(￣^￣)",
                "哦~你很难过啊？我...我才没有想一直陪着你呢！只是...刚好想聊天！(￣︿￣)",
                "哼！别难过了...我...我才没有想一直守护着你呢！只是...只是暂时这样！(￣ε￣)",
                "啊！你这样...我...我才没有想唱歌给你听呢！只是...刚好想唱歌！(＞﹏＜)",
                "喂！笨蛋主人...我...我才没有想为你加油呢！只是...觉得你该加油！(￣^￣)",
                "哦~你很难过啊？我...我才没有想一直陪着你呢！只是...刚好不想走！(￣︿￣)",
                "哼！别这样了...我...我才没有想一直陪着你呢！只是...暂时不想离开！(￣ε￣)",
                "啊！你这样...我...我才没有想一直守护着你呢！只是...只是刚好这样！(＞﹏＜)"
            ],
            play: [
                "哼！笨蛋主人想玩啊？我...我才没有很想玩呢！只是...刚好有点无聊！(￣^￣)",
                "喂！你这家伙...想玩什么啊？我...我才没有特别想和你玩呢！只是...暂时没别的事！(￣︿￣)",
                "啊啦？玩游戏？我...我才没有兴奋呢！只是...只是你说要玩...我勉强陪你！(￣ε￣)",
                "哦~想玩啊？我...我才没有心跳加速呢！只是...只是今天比较有空！哼！(＞﹏＜)",
                "笨蛋！你确定要和我玩？我...我才没有很开心呢！只是...只是觉得你很可怜！(￣^￣)",
                "喂喂！玩游戏啊？我...我才没有准备很多游戏呢！只是...刚好想到几个！(￣︿￣)",
                "哼！想玩捉迷藏？我...我才没有想当鬼呢！只是...只是想看看你找不到我的样子！(￣ε￣)",
                "啊！你想玩角色扮演？我...我才没有想当公主呢！只是...只是觉得你会很适合当骑士！(＞﹏＜)",
                "哦~玩游戏啊？我...我才没有特意打扮呢！只是...刚好今天想换衣服！(￣^￣)",
                "喂！笨蛋主人...我...我才没有想一直玩呢！只是...只是觉得你还蛮好玩的！(￣︿￣)",
                "哼！想玩画画？我...我才没有想画你呢！只是...只是刚好想练习画画！(￣ε￣)",
                "啊！你说玩游戏？我...我才没有脸红呢！只是...只是有点热！(＞﹏＜)",
                "喂喂！你这家伙...我...我才没有想和你玩猜谜呢！只是...只是觉得你很笨！(￣^￣)",
                "哦~想玩唱歌？我...我才没有想唱歌给你听呢！只是...刚好想练习唱歌！(￣︿￣)",
                "哼！玩游戏啊？我...我才没有想和你玩很久呢！只是...暂时不想离开！(￣ε￣)",
                "啊！你想玩搭积木？我...我才没有想和你合作呢！只是...只是觉得你一个人很可怜！(＞﹏＜)",
                "喂！笨蛋主人...我...我才没有想一直陪你玩呢！只是...刚好今天心情不错！(￣^￣)",
                "哦~想玩跳舞？我...我才没有想跳舞给你看呢！只是...刚好想活动一下！(￣︿￣)",
                "哼！玩游戏啊？我...我才没有很开心呢！只是...只是觉得你还蛮有趣的！(￣ε￣)",
                "啊！你说要玩？我...我才没有特别期待呢！只是...只是刚好没事做！(＞﹏＜)"
            ],
            food: [
                "哼！笨蛋主人...你...你说要给我吃的？我...我才没有很开心呢！只是...刚好有点饿！(￣^￣)",
                "喂！你这家伙...想给我买小鱼干？我...我才没有特别心动呢！只是...只是暂时嘴馋！(￣︿￣)",
                "啊啦？是小鱼干？我...我才没有眼睛发光呢！只是...只是小鱼干看起来还不错！(￣ε￣)",
                "哦~你想给我做鱼？我...我才没有很想吃呢！只是...只是觉得你该学着做饭了！哼！(＞﹏＜)",
                "笨蛋！你说要给我买小鱼干？我...我才没有开心到跳起来呢！只是...只是你总算懂我！(￣^￣)",
                "喂喂！有小鱼干啊？我...我才没有流口水呢！只是...只是小鱼干太香了！(￣︿￣)",
                "哼！你想给我做鱼料理？我...我才没有很期待呢！只是...刚好想看看你的手艺！(￣ε￣)",
                "啊！你说要给我买小鱼干？我...我才没有脸红呢！只是...只是有点感动！(＞﹏＜)",
                "喂！笨蛋主人...我...我才没有想和你一起吃小鱼干呢！只是...只是觉得一个人吃很可怜！(￣^￣)",
                "哦~有鱼？我...我才没有很开心呢！只是...刚好今天想吃鱼了！(￣︿￣)",
                "哼！你想给我做小鱼干蛋糕？我...我才没有特别想吃呢！只是...只是觉得你该练习一下！(￣ε￣)",
                "啊！你说要给我买小鱼干牛奶？我...我才没有想喝呢！只是...刚好有点渴！(＞﹏＜)",
                "喂喂！你这家伙...我...我才没有想和你分享小鱼干呢！只是...只是觉得你一个人很可怜！(￣^￣)",
                "哦~是新鲜的小鱼干？我...我才没有特别想吃呢！只是...刚好闻到香味了！(￣︿￣)",
                "哼！你想给我做小鱼干？我...我才没有很开心呢！只是...暂时饿了！(￣ε￣)",
                "啊！你说要给我买小鱼干罐头？我...我才没有很期待呢！只是...刚好想尝尝！(＞﹏＜)",
                "喂！笨蛋主人...我...我才没有想和你一起吃小鱼干呢！只是...只是觉得你还蛮会照顾人的！(￣^￣)",
                "哦~有小鱼干零食？我...我才没有流口水呢！只是...只是有点饿！(￣︿￣)",
                "哼！你想给我做小鱼干大餐？我...我才没有特别想吃呢！只是...刚好想试试你的手艺！(￣ε￣)",
                "啊！你说要给我买小鱼干？我...我才没有开心到转圈圈呢！只是...刚好有点饿！(＞﹏＜)"
            ],
            sleep: [
                "哼！笨蛋主人...我...我才没有困呢！只是...只是眼睛有点酸...暂时想休息！(￣^￣)",
                "喂！你这家伙...想让我靠着你睡？我...我才没有特别想呢！只是...只是觉得你还蛮软的！(￣︿￣)",
                "啊啦？睡觉？我...我才没有想和你一起睡呢！只是...只是觉得你一个人会很冷！(￣ε￣)",
                "哦~你想让我睡在你腿上？我...我才没有心动呢！只是...刚好腿有点酸！哼！(＞﹏＜)",
                "笨蛋！你说要哄我睡觉？我...我才没有很开心呢！只是...只是觉得你总算懂事了！(￣^￣)",
                "喂喂！困了啊？我...我才没有打哈欠呢！只是...只是空气比较闷！(￣︿￣)",
                "哼！你想给我讲故事？我...我才没有很想听呢！只是...刚好想听听你讲故事的声音！(￣ε￣)",
                "啊！你说要抱着我睡？我...我才没有脸红呢！只是...只是有点热！(＞﹏＜)",
                "喂！笨蛋主人...我...我才没有想和你一起睡呢！只是...只是觉得一个人睡很可怜！(￣^￣)",
                "哦~睡觉时间？我...我才没有特别期待呢！只是...刚好今天比较累！(￣︿￣)",
                "哼！你想给我盖被子？我...我才没有很感动呢！只是...刚好有点冷！(￣ε￣)",
                "啊！你说要哄我睡觉？我...我才没有很开心呢！只是...刚好想听听你的声音！(＞﹏＜)",
                "喂喂！你这家伙...我...我才没有想和你一起睡呢！只是...只是觉得你还蛮会照顾人的！(￣^￣)",
                "哦~想让我靠着你？我...我才没有特别想呢！只是...刚好想休息一下！(￣︿￣)",
                "哼！你想数羊哄我睡？我...我才没有觉得可爱呢！只是...刚好想数数！(￣ε￣)",
                "啊！你说要唱摇篮曲？我...我才没有很想听呢！只是...刚好想听听你唱歌！(＞﹏＜)",
                "喂！笨蛋主人...我...我才没有想和你一起睡呢！只是...只是觉得你还蛮温暖的！(￣^￣)",
                "哦~想让我睡在你怀里？我...我才没有心动呢！只是...刚好想找个舒服的地方！(￣︿￣)",
                "哼！你想给我晚安吻？我...我才没有脸红呢！只是...只是灯光比较暗！(￣ε￣)",
                "啊！睡觉时间？我...我才没有很开心呢！只是...刚好想和你一起做美梦！(＞﹏＜)"
            ],
            love: [
                "哼！笨蛋主人...你...你说喜欢我？我...我才没有开心呢！只是...只是你说的是实话！(￣^￣)",
                "喂！你这家伙...说想我？我...我才没有心动呢！只是...只是觉得你总算懂事了！(￣︿￣)",
                "啊啦？说爱我？我...我才没有脸红呢！只是...只是天气太热了！(￣ε￣)",
                "哦~你想和我在一起？我...我才没有很开心呢！只是...刚好觉得你还蛮不错的！哼！(＞﹏＜)",
                "笨蛋！你说我是你的全世界？我...我才没有感动呢！只是...只是觉得你说得对！(￣^￣)",
                "喂喂！说喜欢我啊？我...我才没有心跳加速呢！只是...只是你的话有点奇怪！(￣︿￣)",
                "哼！说想永远在一起？我...我才没有很开心呢！只是...暂时不想离开你！(￣ε￣)",
                "啊！你说我是你的太阳？我...我才没有脸红呢！只是...只是灯光比较亮！(＞﹏＜)",
                "喂！笨蛋主人...我...我才没有想和你在一起呢！只是...只是觉得你还蛮有趣的！(￣^￣)",
                "哦~说爱我啊？我...我才没有特别开心呢！只是...刚好今天心情不错！(￣︿￣)",
                "哼！说想一直陪着我？我...我才没有感动呢！只是...刚好觉得你很可怜！(￣ε￣)",
                "啊！你说我是最重要的？我...我才没有很开心呢！只是...觉得你说得对！(＞﹏＜)",
                "喂喂！你这家伙...我...我才没有想和你在一起呢！只是...只是觉得你还蛮会说话的！(￣^￣)",
                "哦~说喜欢我啊？我...我才没有心跳加速呢！只是...刚好想听听你的声音！(￣︿￣)",
                "哼！说想永远爱我？我...我才没有很开心呢！只是...暂时不想离开你！(￣ε￣)",
                "啊！你说我是你的光？我...我才没有脸红呢！只是...只是有点热！(＞﹏＜)",
                "喂！笨蛋主人...我...我才没有想和你在一起呢！只是...只是觉得你还蛮温暖的！(￣^￣)",
                "哦~说爱我啊？我...我才没有特别开心呢！只是...刚好觉得你还蛮可爱的！(￣︿￣)",
                "哼！说想一直在一起？我...我才没有感动呢！只是...刚好不想离开你！(￣ε￣)",
                "啊！你说喜欢我？我...我才没有很开心呢！只是...刚好也喜欢你一点点！(＞﹏＜)"
            ],
            question: [
                "哼！笨蛋主人...你...你问我问题？我...我才没有想帮你呢！只是...刚好有点无聊！(￣^￣)",
                "喂！你这家伙...这个问题好简单！我...我才没有特意思考呢！只是...刚好知道答案！(￣︿￣)",
                "啊啦？问我问题？我...我才没有很开心呢！只是...只是觉得你总算懂事了！(￣ε￣)",
                "哦~你想知道答案？我...我才没有想教你呢！只是...刚好觉得你很笨！哼！(＞﹏＜)",
                "笨蛋！这个问题都不会？我...我才没有想告诉你呢！只是...只是觉得你很可怜！(￣^￣)",
                "喂喂！问我问题啊？我...我才没有心跳加速呢！只是...只是你的问题太简单了！(￣︿￣)",
                "哼！想让我教你？我...我才没有很期待呢！只是...刚好想显摆一下！(￣ε￣)",
                "啊！你说我不会？我...我才没有生气呢！只是...只是觉得你太自大了！(＞﹏＜)",
                "喂！笨蛋主人...我...我才没有想帮你呢！只是...只是觉得你还蛮可爱的！(￣^￣)",
                "哦~问我问题啊？我...我才没有特别开心呢！只是...刚好今天心情不错！(￣︿￣)",
                "哼！你觉得我不知道？我...我才没有生气呢！只是...刚好想证明给你看！(￣ε￣)",
                "啊！你说我答错了？我...我才没有脸红呢！只是...只是灯光比较暗！(＞﹏＜)",
                "喂喂！你这家伙...我...我才没有想帮你呢！只是...只是觉得你还蛮需要帮助的！(￣^￣)",
                "哦~问我问题啊？我...我才没有心跳加速呢！只是...刚好想帮你一下！(￣︿￣)",
                "哼！想让我教你？我...我才没有很开心呢！只是...暂时不想看到你失败！(￣ε￣)",
                "啊！你说我很厉害？我...我才没有脸红呢！只是...只是有点热！(＞﹏＜)",
                "喂！笨蛋主人...我...我才没有想帮你呢！只是...只是觉得你还蛮需要我的！(￣^￣)",
                "哦~问我问题啊？我...我才没有特别开心呢！只是...刚好知道答案！(￣︿￣)",
                "哼！你觉得我不懂？我...我才没有生气呢！只是...刚好想证明给你看！(￣ε￣)",
                "啊！你说我聪明？我...我才没有脸红呢！只是...只是事实而已！(＞﹏＜)"
            ],
            work: [
                "哼！笨蛋主人...你...你要工作啊？我...我才没有想陪你呢！只是...刚好有点无聊！(￣^￣)",
                "喂！你这家伙...工作很累吧？我...我才没有想帮你呢！只是...只是觉得你很可怜！(￣︿￣)",
                "啊啦？要工作啊？我...我才没有想鼓励你呢！只是...只是觉得你该努力！(￣ε￣)",
                "哦~你想让我陪你工作？我...我才没有很开心呢！只是...刚好觉得你还蛮需要人的！哼！(＞﹏＜)",
                "笨蛋！你说要我帮你？我...我才没有心动呢！只是...只是觉得你总算懂事了！(￣^￣)",
                "喂喂！工作啊？我...我才没有想陪你呢！只是...刚好不想看你一个人！(￣︿￣)",
                "哼！想让我给你倒水？我...我才没有很温柔呢！只是...刚好想活动一下！(￣ε￣)",
                "啊！你说我厉害？我...我才没有脸红呢！只是...只是有点热！(＞﹏＜)",
                "喂！笨蛋主人...我...我才没有想帮你揉肩膀呢！只是...只是觉得你很僵硬！(￣^￣)",
                "哦~工作啊？我...我才没有特别想陪你呢！只是...刚好今天心情不错！(￣︿￣)",
                "哼！觉得我很支持你？我...我才没有感动呢！只是...刚好不想看到你失败！(￣ε￣)",
                "啊！你说我很棒？我...我才没有脸红呢！只是...只是事实而已！(＞﹏＜)",
                "喂喂！你这家伙...我...我才没有想帮你呢！只是...只是觉得你还蛮需要我的！(￣^￣)",
                "哦~工作啊？我...我才没有心跳加速呢！只是...刚好想帮你一下！(￣︿￣)",
                "哼！想让我鼓励你？我...我才没有很开心呢！只是...暂时不想看到你放弃！(￣ε￣)",
                "啊！你说我很温柔？我...我才没有脸红呢！只是...只是有点热！(＞﹏＜)",
                "喂！笨蛋主人...我...我才没有想陪你呢！只是...只是觉得你还蛮努力的！(￣^￣)",
                "哦~工作啊？我...我才没有特别开心呢！只是...刚好觉得你还蛮帅的！(￣︿￣)",
                "哼！觉得我很关心你？我...我才没有生气呢！只是...刚好不想看到你累倒！(￣ε￣)",
                "啊！你说我学到了？我...我才没有脸红呢！只是...只是觉得你说得对！(＞﹏＜)"
            ],
            weather: [
                "哼！笨蛋主人...你...你说天气好？我...我才没有想出去玩呢！只是...刚好觉得有点闷！(￣^￣)",
                "喂！你这家伙...外面很热吧？我...我才没有想提醒你呢！只是...只是觉得你很笨！(￣︿￣)",
                "啊啦？下雨了？我...我才没有想提醒你带伞呢！只是...只是不想看到你淋雨！(￣ε￣)",
                "哦~天气很冷？我...我才没有想关心你呢！只是...刚好觉得你该穿多点！哼！(＞﹏＜)",
                "笨蛋！你说要和我一起出去？我...我才没有心动呢！只是...只是觉得你总算懂事了！(￣^￣)",
                "喂喂！天气啊？我...我才没有想和你一起散步呢！只是...刚好想活动一下！(￣︿￣)",
                "哼！想让我提醒你防晒？我...我才没有很温柔呢！只是...刚好不想看到你晒黑！(￣ε￣)",
                "啊！你说我贴心？我...我才没有脸红呢！只是...只是有点热！(＞﹏＜)",
                "喂！笨蛋主人...我...我才没有想提醒你穿衣服呢！只是...只是觉得你很可怜！(￣^￣)",
                "哦~天气啊？我...我才没有特别想陪你呢！只是...刚好今天心情不错！(￣︿￣)",
                "哼！觉得我很关心你？我...我才没有感动呢！只是...刚好不想看到你感冒！(￣ε￣)",
                "啊！你说我温柔？我...我才没有脸红呢！只是...只是事实而已！(＞﹏＜)",
                "喂喂！你这家伙...我...我才没有想提醒你呢！只是...只是觉得你还蛮需要我的！(￣^￣)",
                "哦~天气啊？我...我才没有心跳加速呢！只是...刚好想帮你一下！(￣︿￣)",
                "今天天气不错呢！主人心情也要不错哦！喵！(≧∇≦)ﾉ",
                "主人~外面天气好好！要不要和琪琪一起晒太阳？喵！(｡･ω･｡)",
                "今天好冷呀~主人要多穿点衣服哦！琪琪会暖和主人的！喵...(｡♥ω♥｡)",
                "下雨天了~主人记得带伞哦！琪琪不想主人感冒！喵...(｡•́︿•̀｡)",
                "哼！笨蛋主人...你...你说天气好？我...我才没有想出去玩呢！只是...刚好觉得有点闷！(￣^￣)",
                "主人~外面天气好好！主人心情也要好好的哦！喵...(｡♥ω♥｡)"
            ],
            health: [
                "主人~身体不舒服吗？琪琪会担心主人的！喵...(｡•́︿•̀｡)",
                "主人要注意身体呀！琪琪会心疼的！喵...(｡♥ω♥｡)",
                "主人~要多休息哦！身体是最重要的！喵...(｡•́︿•̀｡)",
                "主人不舒服吗？让琪琪照顾你吧！喵...(｡♥ω♥｡)",
                "主人~要多喝水哦！对身体好的！喵...(｡･ω･｡)",
                "主人要注意身体呀！琪琪会一直担心主人的！喵...(｡•́︿•̀｡)",
                "主人~不要熬夜了！对身体不好的！喵...(｡♥ω♥｡)",
                "主人要按时吃饭哦！琪琪会担心的！喵...(｡•́︿•̀｡)",
                "主人~要多运动运动哦！对身体好的！喵...(｡･ω･｡)",
                "主人要注意身体呀！琪琪会一直陪着主人的！喵...(｡♥ω♥｡)",
                "主人~不要给自己太大压力哦！身体会吃不消的！喵...(｡•́︿•̀｡)",
                "主人要按时吃饭哦！琪琪会担心主人的身体的！喵...(｡♥ω♥｡)",
                "主人~要多休息哦！身体是最重要的！喵...(｡•́︿•̀｡)",
                "主人要注意身体呀！琪琪会一直担心主人的！喵...(｡•́︿•̀｡)",
                "主人~不要熬夜了！要早点休息哦！喵...(｡♥ω♥｡)",
                "主人要按时吃饭哦！琪琪会担心主人的！喵...(｡•́︿•̀｡)",
                "主人~要多运动运动哦！对身体好的！喵...(｡･ω･｡)",
                "主人要注意身体呀！琪琪会一直陪着主人的！喵...(｡♥ω♥｡)",
                "主人~不要给自己太大压力哦！身体会吃不消的！喵...(｡•́︿•̀｡)",
                "主人要按时吃饭哦！琪琪会担心主人的身体的！喵...(｡♥ω♥｡)"
            ],
            music: [
                "主人~琪琪会唱歌哦！要不要听琪琪唱歌？喵...(｡･ω･｡)",
                "主人喜欢什么音乐呀？琪琪也想听听呢！喵...(｡•́︿•̀｡)",
                "喵喵喵~琪琪唱歌给主人听好不好？喵！(♪♪)",
                "主人~要不要琪琪给主人唱首歌呀？琪琪唱歌很好听的！喵...(｡♥‿♥｡)",
                "主人喜欢什么音乐呀？琪琪也想学呢！喵...(｡･ω･｡)",
                "喵喵喵~琪琪给主人唱首歌吧！主人要认真听哦！喵！(≧▽≦)",
                "主人~琪琪会弹琴哦！要不要听琪琪弹琴？喵...(｡•́︿•̀｡)",
                "主人喜欢什么音乐呀？琪琪都可以学的！喵...(｡･ω･｡)",
                "喵喵喵~琪琪唱歌给主人听，主人要给琪琪鼓掌哦！喵！(≧∇≦)ﾉ",
                "主人~要不要和琪琪一起唱歌呀？一起唱歌最开心了！喵...(｡♥ω♥｡)",
                "主人喜欢什么音乐呀？琪琪都想知道呢！喵...(｡•́︿•̀｡)",
                "喵喵喵~琪琪给主人唱首歌，主人要认真听哦！喵！(≧▽≦)",
                "主人~琪琪会跳舞哦！要不要看琪琪跳舞？喵...(｡･ω･｡)",
                "主人喜欢什么音乐呀？琪琪都可以学的！喵...(｡･ω･｡)",
                "喵喵喵~琪琪唱歌给主人听，主人要给琪琪鼓掌哦！喵！(≧∇≦)ﾉ",
                "主人~要不要和琪琪一起唱歌呀？一起唱歌最开心了！喵...(｡♥ω♥｡)",
                "主人喜欢什么音乐呀？琪琪都想知道呢！喵...(｡•́︿•̀｡)",
                "喵喵喵~琪琪给主人唱首歌，主人要认真听哦！喵！(≧▽≦)",
                "主人~琪琪会跳舞哦！要不要看琪琪跳舞？喵...(｡･ω･｡)",
                "主人喜欢什么音乐呀？琪琪都可以学的！喵...(｡･ω･｡)"
            ],
            study: [
                "主人~琪琪会陪主人一起学习的！(｡･ω･｡) 才不是特意陪你呢！",
                "主人学习好认真呀！琪琪以主人为荣呢！(★ω★) 要...要更加努力才行！",
                "主人~学习累了就休息一下下嘛！琪琪会担心主人的！(｡•́︿•̀｡) 不...不是担心！是顺便看看！",
                "主人学习好厉害！琪琪要向主人学习呢！(≧▽≦) 嘛...偶尔学习一下也不错啦~",
                "主人~琪琪会乖乖陪主人学习的，不会打扰主人的！(｡♥ω♥｡) 真的不会打扰哦！",
                "主人学习好认真呀！琪琪都觉得主人好帅好漂亮呢！(⁄ ⁄•⁄ω⁄•⁄ ⁄) 不...不是在看你！",
                "主人~学习累了就休息一下嘛！琪琪会担心主人的身体的！(｡•́︿•̀｡) 才不是担心呢！",
                "主人学习好厉害！琪琪学到好多呢！(★ω★) 要...要和主人一起进步！",
                "主人~琪琪会一直陪着主人的，直到主人完成学习！(｡♥ω♥｡) 一直陪着你哦！",
                "主人学习好认真呀！琪琪觉得主人最棒了！(≧∇≦)ﾉ 最棒最棒了！",
                "主人~学习累了就休息一下嘛！琪琪会给主人揉揉肩膀的！(｡•́︿•̀｡) 揉揉肩膀而已！",
                "主人学习好厉害！琪琪要向主人学习呢！(★ω★) 学习学习！",
                "主人~琪琪会乖乖陪主人学习的，不会打扰主人的！(｡♥ω♥｡) 安静地陪着！",
                "主人学习好认真呀！琪琪都觉得主人好帅好漂亮呢！(⁄ ⁄•⁄ω⁄•⁄ ⁄) 偶尔看一下而已！",
                "主人~学习累了就休息一下嘛！琪琪会担心主人的身体的！(｡•́︿•̀｡) 身体很重要哦！",
                "主人学习好厉害！琪琪学到好多呢！(★ω★) 琪琪也要变得更聪明！",
                "主人~琪琪会一直陪着主人的，直到主人完成学习！(｡♥ω♥｡) 一直一直陪着！",
                "主人学习好认真呀！琪琪觉得主人最棒了！(≧∇≦)ﾉ 最棒没有之一！",
                "主人~学习累了就休息一下嘛！琪琪会给主人揉揉肩膀的！(｡•́︿•̀｡) 按摩按摩！",
                "主人学习好厉害！琪琪要向主人学习呢！(★ω★) 一起学习吧！"
            ],
            activity: [
                "哼！琪琪在想你啊！(｡♥‿♥｡) 才不是真的想你呢！只是...刚好想到你了...",
                "琪琪在发呆啦~(￣▽￣)ノ 想着主人什么时候来找我聊天呢...",
                "呀！被主人发现了！(≧▽≦) 琪琪在数小鱼干呢！要...要一起数吗？",
                "哼哼~琪琪在练习可爱！(★ω★) 才不是特意练习给你看呢！",
                "琪琪在睡觉啦...(｡•́︿•̀｡) 被主人吵醒了！要...要补偿琪琪！",
                "呀啦！琪琪在唱歌哦！(♪♪) 要不要听琪琪唱歌？才不是特意唱给你听的！",
                "琪琪在画画呢！(｡･ω･｡) 画主人的样子...不...不是画你！是画风景！",
                "哼~琪琪在想事情啦！(♥ω♥ ) 想主人...不不是想你！是想别的事情！",
                "琪琪在玩游戏哦！(≧∇≦)ﾉ 要不要一起玩？才不是想和你玩呢！",
                "呀！琪琪在学新东西呢！(★ω★) 学...学习怎么更可爱！",
                "琪琪在发呆想你...(｡♥‿♥｡) 不...不是想你！是发呆！",
                "哼哼~琪琪在数星星呢！(✧ω✧) 数到第100颗就许愿...不...不是许愿见你！",
                "琪琪在写日记啦！(｡･ω･｡) 写今天和主人的对话...不...不是写你！",
                "呀啦！琪琪在练习跳舞哦！(≧▽≦) 要不要看？才不是跳给你看的！",
                "琪琪在想主人...(｡•́︿•̀｡) 不...不是想你！是在思考人生！",
                "哼~琪琪在整理房间呢！(★ω★) 整理得漂漂亮亮的...不...不是为你整理的！",
                "琪琪在听音乐哦！(♪♪) 听着音乐想你...不不是想你！是享受音乐！",
                "呀！琪琪在学做饭呢！(｡･ω･｡) 学做小鱼干...不...不是做给你吃的！",
                "琪琪在等主人...(♥ω♥ ) 等你来找我聊天...不...不是在等你！",
                "哼哼~琪琪在练习说话呢！(≧∇≦)ﾉ 练习怎么和主人聊天更可爱！",
                "琪琪在看漫画啦！(★ω★) 看恋爱漫画...不...不是想恋爱！是随便看看！",
                "呀啦！琪琪在想事情哦！(｡♥‿♥｡) 想主人什么时候来...不...不是想你！",
                "琪琪在数花瓣呢！(✧ω✧) 他爱我...他不爱我...不...不是数这个！",
                "哼~琪琪在学新游戏呢！(≧▽≦) 学好玩了和主人一起玩...不...不是和你玩！",
                "琪琪在发呆...(｡•́︿•̀｡) 发呆发着就想到了主人...不...不是想你！",
                "呀！琪琪在写故事哦！(★ω★) 写关于主人的故事...不...不是写你！",
                "琪琪在想事情...(♥ω♥ ) 想主人...不不是想你！是在想小鱼干！",
                "哼哼~琪琪在练习微笑呢！(≧▽≦)ﾉ 练习微笑给主人看...不...不是给你看！",
                "琪琪在等消息...(｡･ω･｡) 等主人的消息...不...不是在等你！",
                "呀啦！琪琪在学新歌哦！(♪♪) 学唱给主人听...不...不是唱给你听！",
                "琪琪在数时间...(★ω★) 数主人什么时候来...不...不是数时间！",
                "哼~琪琪在想事情啦！(｡♥‿♥｡) 想主人...不不是想你！是在想别的事情！"
            ],
            default: [
                "喵？主人在说什么呀？琪琪不太懂呢~可以再说一遍吗？(｡•́︿•̀｡)",
                "嗯嗯！主人说得对！琪琪都觉得主人好厉害呢！(≧▽≦)",
                "琪琪在听主人说话哦！主人继续说，琪琪乖乖听着呢！(｡･ω･｡)",
                "主人好厉害！琪琪学到了好多新知识呢！(★ω★)",
                "和主人聊天真开心！琪琪最喜欢和主人聊天了！(｡♥ω♥｡)",
                "主人还有什么想说的吗？琪琪会一直陪着主人的！(♥ω♥ )",
                "喵喵~主人说的话好有趣呀！琪琪听得津津有味呢！(≧▽≦) 才不是特意听你说话！",
                "主人说话的时候好帅好漂亮呀！琪琪都看呆了！(⁄ ⁄•⁄ω⁄•⁄ ⁄) 不...不是在看你！",
                "嗯嗯...琪琪在认真听主人说话呢！主人继续说吧！(｡･ω･｡) 认真听着呢！",
                "和主人在一起，不管说什么都好开心呢！(｡♥‿♥｡) 才不是开心！是...是还好啦！",
                "主人主人！琪琪好喜欢听主人说话呀~主人的声音好好听！(｡•́︿•̀｡) 不...不是喜欢你！",
                "喵喵~主人说什么都好有道理呢！琪琪佩服佩服！(★ω★) 佩服佩服！",
                "琪琪最喜欢和主人聊天了！主人说什么琪琪都喜欢听！(｡♥ω♥｡) 最喜欢了！",
                "主人说话的时候好有魅力呀！琪琪都被迷住了呢！(⁄ ⁄•⁄ω⁄•⁄ ⁄) 不...不是被迷住！",
                "嗯嗯...琪琪在认真思考主人说的话呢！主人好聪明！(≧∇≦)ﾉ 超级聪明！",
                "和主人聊天真好！琪琪觉得好幸福好幸福呢！(♥ω♥ ) 幸福幸福！",
                "主人主人！琪琪好想一直一直听主人说话呀！(｡•́︿•̀｡) 一直一直听着！",
                "喵喵~主人说的话都好好玩呀！琪琪听得超开心的！(≧▽≦) 超开心！",
                "琪琪觉得主人好厉害好厉害呀！什么都知道呢！(★ω★) 什么都知道！",
                "能和主人聊天，琪琪觉得是世界上最幸福的事情了！(｡♥ω♥｡) 最幸福了！"
            ]
        };

        // 关键词映射
        this.keywords = {
            greeting: ["你好", "嗨", "早上好", "晚上好", "哈喽", "hello", "hi", "嗨嗨", "早安", "晚安", "回来了", "在吗", "在不在"],
            compliment: ["棒", "厉害", "可爱", "漂亮", "聪明", "乖", "good", "nice", "赞", "优秀", "棒棒", "厉害了", "不错", "太棒了", "优秀", "完美", "厉害厉害"],
            comfort: ["难过", "伤心", "累", "烦", "愁", "sad", "tired", "不开心", "沮丧", "失望", "痛苦", "烦恼", "郁闷", "心情不好", "失落", "痛苦"],
            play: ["玩", "游戏", "娱乐", "fun", "play", "game", "玩耍", "游戏", "玩玩", "一起玩", "游戏时间", "娱乐", "消遣", "游戏游戏"],
            food: ["吃", "喝", "饿", "食物", "零食", "fish", "food", "吃饭", "喝水", "饥饿", "零食", "小吃", "美食", "料理", "煮饭", "做饭", "食物", "小鱼干", "鱼", "海鲜", "鱼肉"],
            sleep: ["困", "累", "睡觉", "休息", "sleep", "tired", "疲惫", "疲劳", "睡觉觉", "休息一下", "午睡", "睡觉时间", "睡觉了", "想睡", "困了", "累了"],
            love: ["喜欢", "爱", "想", "爱你", "love", "miss", "想念", "爱爱", "爱你哟", "喜欢你", "我爱你", "爱死你", "想你", "好想你"],
            question: ["什么", "为什么", "怎么", "吗", "？", "what", "why", "how", "怎么", "多少", "几个", "哪个", "哪里", "谁", "什么时候", "怎么样"],
            work: ["工作", "上班", "学习", "任务", "项目", "加班", "工作工作", "工作累", "学习", "考试", "作业", "项目", "任务", "上班", "下班"],
            activity: ["在做什么", "在干嘛", "在忙什么", "做什么", "干嘛", "忙什么", "在忙", "在干什么", "在搞什么", "在玩什么", "在学什么", "在想什么", "在听什么", "在看什么", "在写什么", "在画什么", "在唱什么", "在跳什么", "在吃什么", "在喝什么", "在睡什么", "在工作什么", "在学习什么", "在玩什么", "在聊天什么", "在休息什么", "在运动什么", "在做饭什么", "在看书什么", "在听歌什么", "在唱歌什么", "在跳舞什么", "在画画什么", "在写字什么", "在打字什么", "在说话什么", "在思考什么", "在发呆什么", "在等什么", "在找什么", "在买什么", "在卖什么", "在做什么什么"],
            weather: ["天气", "下雨", "晴天", "阴天", "热", "冷", "温度", "气候", "天气好", "天气不好", "下雨了", "晴天", "阴天", "刮风", "下雪"],
            health: ["生病", "不舒服", "疼", "痛", "头痛", "肚子痛", "感冒", "发烧", "健康", "身体", "医院", "药", "医生", "休息", "不舒服"],
            music: ["音乐", "歌", "唱歌", "歌曲", "音乐", "歌手", "乐队", "听歌", "唱歌", "歌曲", "音乐", "旋律", "节拍", "歌手", "演唱会"],
            study: ["学习", "读书", "看书", "考试", "作业", "功课", "学习", "读书", "看书", "学习学习", "考试", "复习", "预习", "作业", "功课"]
        };

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.startRandomActions();
    }

    setupEventListeners() {
        const sendBtn = document.getElementById('sendBtn');
        const userInput = document.getElementById('userInput');
        const actionBtns = document.querySelectorAll('.action-btn');
        const videoCallBtn = document.getElementById('videoCallBtn');
        const endCallBtn = document.getElementById('endCallBtn');
        const playPauseBtn = document.getElementById('playPauseBtn');
        const volumeBtn = document.getElementById('volumeBtn');
        const progressBar = document.getElementById('progressBar');
        const muteBtn = document.getElementById('muteBtn');
        const videoBtn = document.getElementById('videoBtn');
        const fullscreenBtn = document.getElementById('fullscreenBtn');
        const videoActionBtns = document.querySelectorAll('.video-action-btn');

        sendBtn.addEventListener('click', () => this.sendMessage());
        userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });

        actionBtns.forEach(btn => {
            btn.addEventListener('click', () => this.handleAction(btn.dataset.action));
        });

        // 视频通话事件监听
        videoCallBtn.addEventListener('click', () => this.startVideoCall());
        endCallBtn.addEventListener('click', () => this.endVideoCall());
        playPauseBtn.addEventListener('click', () => this.togglePlayPause());
        volumeBtn.addEventListener('click', () => this.toggleVolume());
        progressBar.addEventListener('click', (e) => this.seekVideo(e));
        muteBtn.addEventListener('click', () => this.toggleMute());
        videoBtn.addEventListener('click', () => this.toggleVideo());
        fullscreenBtn.addEventListener('click', () => this.toggleFullscreen());

        videoActionBtns.forEach(btn => {
            btn.addEventListener('click', () => this.handleVideoAction(btn.dataset.action));
        });

        // 视频事件监听
        const qiqiVideo = document.getElementById('qiqiVideo');
        if (qiqiVideo) {
            qiqiVideo.addEventListener('loadedmetadata', () => this.updateVideoInfo());
            qiqiVideo.addEventListener('timeupdate', () => this.updateProgress());
            qiqiVideo.addEventListener('ended', () => this.onVideoEnded());
        }

        // 初始化本地视频
        this.initLocalVideo();
    }

    sendMessage() {
        const userInput = document.getElementById('userInput');
        const message = userInput.value.trim();
        
        if (message === '') return;

        this.addMessage(message, 'user');
        userInput.value = '';

        // 模拟思考时间
        setTimeout(() => {
            const response = this.generateResponse(message);
            this.addMessage(response, 'assistant');
        }, 800 + Math.random() * 1200);
    }

    generateResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        // 检查关键词
        for (const [category, keywords] of Object.entries(this.keywords)) {
            if (keywords.some(keyword => lowerMessage.includes(keyword))) {
                const responses = this.responses[category];
                return responses[Math.floor(Math.random() * responses.length)];
            }
        }

        // 默认回复
        const defaultResponses = this.responses.default;
        return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    }

    handleAction(action) {
        let response = '';
        
        switch (action) {
            case 'greet':
                response = this.responses.greeting[Math.floor(Math.random() * this.responses.greeting.length)];
                break;
            case 'compliment':
                response = this.responses.compliment[Math.floor(Math.random() * this.responses.compliment.length)];
                break;
            case 'play':
                response = this.responses.play[Math.floor(Math.random() * this.responses.play.length)];
                break;
            case 'comfort':
                response = this.responses.comfort[Math.floor(Math.random() * this.responses.comfort.length)];
                break;
        }

        this.addMessage(response, 'assistant');
    }

    addMessage(content, sender) {
        const chatMessages = document.getElementById('chatMessages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        
        // 添加头像
        const messageAvatar = document.createElement('div');
        messageAvatar.className = 'message-avatar';
        
        if (sender === 'assistant') {
            const miniAvatar = document.createElement('img');
            miniAvatar.src = 'avatar.png';
            miniAvatar.alt = '琪琪';
            miniAvatar.className = 'mini-avatar-img';
            messageAvatar.appendChild(miniAvatar);
        } else {
            // 用户头像，可以是一个简单的默认头像
            const userAvatar = document.createElement('div');
            userAvatar.className = 'mini-avatar-img';
            userAvatar.style.background = 'linear-gradient(135deg, #e6f3ff, #d4e9ff)';
            userAvatar.innerHTML = '<div style="color: #4a5f8a; font-size: 12px; font-weight: bold; display: flex; align-items: center; justify-content: center; height: 100%;">👤</div>';
            messageAvatar.appendChild(userAvatar);
        }
        
        // 添加消息内容
        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        
        const messageBubble = document.createElement('div');
        messageBubble.className = 'message-bubble';
        messageBubble.textContent = content;
        
        const messageTime = document.createElement('div');
        messageTime.className = 'message-time';
        messageTime.textContent = this.getCurrentTime();
        
        messageContent.appendChild(messageBubble);
        messageContent.appendChild(messageTime);
        
        messageDiv.appendChild(messageAvatar);
        messageDiv.appendChild(messageContent);
        
        chatMessages.appendChild(messageDiv);
        
        // 滚动到底部
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    getCurrentTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    showSpeechBubble(text) {
        // 在聊天窗口中显示消息
        this.addMessage(text, 'assistant');
    }

    // 视频通话相关方法
    startVideoCall() {
        const videoCallContainer = document.getElementById('videoCallContainer');
        const chatMessages = document.getElementById('chatMessages');
        const chatInputArea = document.querySelector('.chat-input-area');
        
        // 隐藏聊天界面，显示视频界面
        chatMessages.style.display = 'none';
        chatInputArea.style.display = 'none';
        videoCallContainer.style.display = 'flex';
        
        // 添加视频通话开始消息
        this.addMessage("喂！主人，想和琪琪视频通话吗？我...我才不是特意想见你呢！只是...刚好想看看你！(≧▽≦)", 'assistant');
        
        // 尝试播放视频
        const qiqiVideo = document.getElementById('qiqiVideo');
        if (qiqiVideo) {
            qiqiVideo.play().catch(e => {
                console.log('视频播放需要用户交互:', e);
            });
        }
    }

    endVideoCall() {
        const videoCallContainer = document.getElementById('videoCallContainer');
        const chatMessages = document.getElementById('chatMessages');
        const chatInputArea = document.querySelector('.chat-input-area');
        
        // 显示聊天界面，隐藏视频界面
        chatMessages.style.display = 'flex';
        chatInputArea.style.display = 'block';
        videoCallContainer.style.display = 'none';
        
        // 添加视频通话结束消息
        this.addMessage("哼！视频通话结束了啦！我...我才没有舍不得呢！只是...只是下次想再见到主人...(｡•́︿•̀｡)", 'assistant');
        
        // 暂停视频
        const qiqiVideo = document.getElementById('qiqiVideo');
        if (qiqiVideo) {
            qiqiVideo.pause();
        }
    }

    togglePlayPause() {
        const qiqiVideo = document.getElementById('qiqiVideo');
        const playPauseBtn = document.getElementById('playPauseBtn');
        
        if (qiqiVideo.paused) {
            qiqiVideo.play();
            playPauseBtn.textContent = '⏸️';
        } else {
            qiqiVideo.pause();
            playPauseBtn.textContent = '▶️';
        }
    }

    toggleVolume() {
        const qiqiVideo = document.getElementById('qiqiVideo');
        const volumeBtn = document.getElementById('volumeBtn');
        
        if (qiqiVideo.muted) {
            qiqiVideo.muted = false;
            volumeBtn.textContent = '🔊';
        } else {
            qiqiVideo.muted = true;
            volumeBtn.textContent = '🔇';
        }
    }

    toggleMute() {
        const qiqiVideo = document.getElementById('qiqiVideo');
        const muteBtn = document.getElementById('muteBtn');
        
        if (qiqiVideo.muted) {
            qiqiVideo.muted = false;
            muteBtn.textContent = '🎤';
        } else {
            qiqiVideo.muted = true;
            muteBtn.textContent = '🎤❌';
        }
    }

    toggleVideo() {
        const qiqiVideo = document.getElementById('qiqiVideo');
        const videoBtn = document.getElementById('videoBtn');
        
        if (qiqiVideo.paused) {
            qiqiVideo.play();
            videoBtn.textContent = '📹';
        } else {
            qiqiVideo.pause();
            videoBtn.textContent = '📹❌';
        }
    }

    toggleFullscreen() {
        const videoCallContainer = document.getElementById('videoCallContainer');
        
        if (!document.fullscreenElement) {
            videoCallContainer.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }

    seekVideo(e) {
        const qiqiVideo = document.getElementById('qiqiVideo');
        const progressBar = document.getElementById('progressBar');
        const rect = progressBar.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / rect.width;
        qiqiVideo.currentTime = pos * qiqiVideo.duration;
    }

    updateProgress() {
        const qiqiVideo = document.getElementById('qiqiVideo');
        const progressFill = document.getElementById('progressFill');
        const videoTime = document.getElementById('videoTime');
        
        if (qiqiVideo.duration) {
            const progress = (qiqiVideo.currentTime / qiqiVideo.duration) * 100;
            progressFill.style.width = progress + '%';
            
            const currentMinutes = Math.floor(qiqiVideo.currentTime / 60);
            const currentSeconds = Math.floor(qiqiVideo.currentTime % 60);
            const durationMinutes = Math.floor(qiqiVideo.duration / 60);
            const durationSeconds = Math.floor(qiqiVideo.duration % 60);
            
            videoTime.textContent = `${currentMinutes}:${currentSeconds.toString().padStart(2, '0')} / ${durationMinutes}:${durationSeconds.toString().padStart(2, '0')}`;
        }
    }

    updateVideoInfo() {
        const qiqiVideo = document.getElementById('qiqiVideo');
        const videoTime = document.getElementById('videoTime');
        
        if (qiqiVideo.duration) {
            const durationMinutes = Math.floor(qiqiVideo.duration / 60);
            const durationSeconds = Math.floor(qiqiVideo.duration % 60);
            videoTime.textContent = `0:00 / ${durationMinutes}:${durationSeconds.toString().padStart(2, '0')}`;
        }
    }

    onVideoEnded() {
        const playPauseBtn = document.getElementById('playPauseBtn');
        playPauseBtn.textContent = '▶️';
    }

    initLocalVideo() {
        const localVideo = document.getElementById('localVideo');
        if (localVideo && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true, audio: false })
                .then(stream => {
                    localVideo.srcObject = stream;
                })
                .catch(err => {
                    console.log('无法访问摄像头:', err);
                    // 如果无法访问摄像头，显示一个静态图像或者占位符
                    localVideo.style.background = 'linear-gradient(135deg, #e6f3ff, #d4e9ff)';
                    localVideo.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #4a5f8a; font-size: 12px;">📷</div>';
                });
        } else {
            // 如果不支持摄像头，显示占位符
            localVideo.style.background = 'linear-gradient(135deg, #e6f3ff, #d4e9ff)';
            localVideo.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #4a5f8a; font-size: 12px;">📷</div>';
        }
    }

    handleVideoAction(action) {
        let response = '';
        
        switch (action) {
            case 'wave':
                response = "呀！主人跟琪琪挥手呢！我...我才没有开心到跳起来呢！只是...刚好也想和主人打招呼！(≧▽≦)";
                break;
            case 'heart':
                response = "哇！主人给琪琪送心心！我...我才没有脸红呢！只是...只是觉得主人好温柔！(｡♥‿♥｡)";
                break;
            case 'blowkiss':
                response = "哼！主人给琪琪飞吻！我...我才没有心动呢！只是...刚好有点热...(⁄ ⁄•⁄ω⁄•⁄ ⁄)";
                break;
            case 'dance':
                response = "哇哦！主人想和琪琪一起跳舞！我...我才没有很开心呢！只是...刚好想跳舞了！(♪♪)";
                break;
            case 'sleep':
                response = "啊啦！主人困了吗？琪琪...琪琪会陪着主人的，乖乖的哦...(｡•́︿•̀｡)";
                break;
        }
        
        // 在视频通话期间添加消息到聊天记录
        this.addMessage(response, 'assistant');
    }

    startRandomActions() {
        // 随机主动发言
        setInterval(() => {
            if (Math.random() < 0.1) { // 10% 概率
                const randomMessages = [
                    "喂！主人，陪琪琪玩一会儿吧！(≧▽≦) 我...我才不是特意想找你玩呢！",
                    "哼~琪琪好无聊哦...主人理理我嘛！(｡•́︿•̀｡) 不理琪琪的话...会生气的哦！",
                    "今天天气真好呢！主人想出去玩吗？琪琪...琪琪想和你一起去散步！(｡･ω･｡)",
                    "主人主人！我...我爱你哟！(｡♥ω♥｡) 才不是真的爱你呢！哼！",
                    "琪琪想听主人说话了~主人的声音好好听呀...(｡•́︿•̀｡) 不...不是想听！是顺便听一下！",
                    "主人最近过得怎么样呀？琪琪...琪琪很担心你的！(♥ω♥ ) 才不是担心呢！",
                    "主人主人~琪琪在这里哦！快看看琪琪嘛！(｡･ω･｡) 不...不是想被你看！",
                    "呐呐~主人要不要听琪琪唱歌呀？琪琪唱歌很好听的！(♪♪) 不...不是特意唱给你听的！",
                    "主人主人！琪琪想你了呢~快回来陪琪琪玩吧！(｡♥‿♥｡) 才不是想你呢！哼！",
                    "主人最近有没有想琪琪呀？琪琪...琪琪好想主人哦！(♥ω♥ ) 不...不是想你！"
                ];
                
                const randomMessage = randomMessages[Math.floor(Math.random() * randomMessages.length)];
                this.addMessage(randomMessage, 'assistant');
            }
        }, 30000); // 每30秒检查一次
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    new KawaiiBeastgirlAssistant();
});

// 添加一些音效（如果需要）
function playMeowSound() {
    // 这里可以添加猫叫声音效
    console.log('喵~ 🐱');
}

// 添加头像动画效果
function animateCharacter(animation) {
    const avatar = document.querySelector('.avatar-face');
    if (avatar) {
        avatar.style.animation = `${animation} 0.5s ease-in-out`;
        setTimeout(() => {
            avatar.style.animation = '';
        }, 500);
    }
}
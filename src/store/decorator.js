import { autorun, computed, observable} from "mobx";
//构造一个命名空间
class Store {
    @observable count = 1
    @observable price = 2
    @computed get
    add () {
        return this.count + this.price
    }
    @autorun
    setValue(x, y){
        this.price = x;
        this.count = y
    }
}
export default new Store();

import { action, observable } from 'mobx';

class Store {
    @observable
    count = 1;
    test = 'profile'
    @action.bound
    setCount = () => {
        this.count ++
    }
}
export default new Store();

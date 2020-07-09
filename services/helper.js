import _ from 'lodash';

export default function setDefaults(options, defaults) {
    return _.defaults({}, _.clone(options), defaults);
};
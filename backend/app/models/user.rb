class User < ApplicationRecord
  serialize :auths, HashSerializer
  serialize :profile, HashSerializer
end

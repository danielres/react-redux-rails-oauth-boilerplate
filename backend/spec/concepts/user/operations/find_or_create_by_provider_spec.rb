require "rails_helper"
require_relative './find_or_create_by_provider/shared_examples'

RSpec.describe User::FindOrCreateByProvider do
  it_behaves_like "User::FindOrCreateByProvider"
end

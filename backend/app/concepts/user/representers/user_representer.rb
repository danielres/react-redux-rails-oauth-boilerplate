class UserRepresenter < Representable::Decorator
  include Representable::JSON
  property :id
  property :profile
  property :inviter_id
  property :created_at
  property :updated_at
end
